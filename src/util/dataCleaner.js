export const cleanData = (data) => {
  const filteredCategories = data.attractions.filter(attraction => attraction.length > 0);
  const purifiedCategories = filteredCategories.map(category => category.filter(subcategory => subcategory !== null));
  return purifiedCategories;
}

export const assignObjectToArrays = (array) => {
  const accommodations = [];
  const attractions = [];
  const food = [];
  const drinks = [];
  const services = [];
  const miscellaneous = [];
  const accommodationTypes = ['hotels', 'hotels & travel', 'bed & breakfast', 'guest houses', 'resorts', 'rv parks'];
  const attractionTypes = ['art museums', 'hiking', 'day spas', 'escape games', 'haunted houses', 'parks', 'landmarks & historical buildings', 'art galleries', 'walking tours', 'arts & entertainment', 'day camps', 'boat tours', 'boating', 'tours', 'bowling', 'climbing', 'historical tours', 'art classes', 'arcades', 'bubble soccer', 'gay bars', 'jazz & blues', 'performing arts'];
  const foodTypes = ['gastropubs', 'sandwiches', 'steakhouses', 'fast food', 'chocolatiers & shops', 'cantonese', 'sushi bars', 'asian fusion', 'diners', 'american (traditional)', 'american (new)','chinese', 'mexican', 'pizza', 'burgers', 'coffee & tea', 'bakeries','breakfast & brunch', 'japanese'];
  const drinkTypes = ['bars', 'wine bars', 'wine tasting room', 'beer, wine & spirits', 'lounges', 'dive bars', 'distilleries', 'breweries',
  'beer bars'];
  const serviceTypes = ['gyms', 'outdoor gear', 'gift shops', 'hunting & fishing supplies', 'body shops', 'medical centers', 'veterinarians', 'waxing', 'grocery'];

  array.forEach(obj => {
    const type = obj.category;
    if (accommodationTypes.includes(type)) {
      accommodations.push({ ...obj, svg: 'accommodations' });
    } else if (attractionTypes.includes(type)) {
      attractions.push({ ...obj, svg: 'attractions' });
    } else if (foodTypes.includes(type)) {
      food.push({ ...obj, svg: 'food' });
    } else if (drinkTypes.includes(type)) {
      drinks.push({ ...obj, svg: 'drinks' });
    } else if (serviceTypes.includes(type)) {
      services.push({ ...obj, svg: 'services' });
    } else {
      miscellaneous.push(obj)
    }
  }); 
 
  const arrays = [accommodations, attractions, food, drinks, services, miscellaneous];
  return arrays
}

export const cleanYelpResponse = yelp => {
  return {
    name: yelp.name,
    image: yelp.image_url,
    url: yelp.url,
    rating: yelp.rating,
    latitude: yelp.coordinates.latitude,
    longitude: yelp.coordinates.longitude,
    address: yelp.location.display_address,
    phone: yelp.display_phone,
    category: yelp.categories[0].title.toLowerCase()
  };
};

export const stringToFloatsArray = string => {
  return string.replace(/[^0-9|.|,|-]/g, '').split(',').map(string => parseFloat(string))
}

export const createStateObject = formObject => {
  const formCategories = Object.keys(formObject);

  const stateObject = formCategories.reduce((categoryObject, category) => {
    const categoryKey = category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    categoryObject[categoryKey] = false;
    return categoryObject
  }, {});

  return stateObject;
}

export const createCheckBoxNames = formObject => {
  const formCategories = Object.keys(formObject);

  const checkboxNames = formCategories.map(category => category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

  return checkboxNames; 
}

export const objectifyArray = array => {
  const finalObject = array.reduce((finalObject, obj) => {
    if (!finalObject[obj.category]) {
      finalObject[obj.category] = [];
    }
    finalObject[obj.category].push(obj);
    return finalObject;
  }, {});
  return finalObject;
}