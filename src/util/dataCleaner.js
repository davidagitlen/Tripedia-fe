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

  array.forEach(obj => {
    const type = obj.category;
    switch (type) {
      case 'hotels':
        accommodations.push({...obj, svg: 'accommodations' });
        return
      case 'hotels & travel':
        accommodations.push({ ...obj, svg: 'accommodations' })
        return
      case 'bed & breakfast':
        accommodations.push({ ...obj, svg: 'accommodations' });
        return
      case 'guest houses':
        accommodations.push({ ...obj, svg: 'accommodations' });
        return
      case 'resorts':
        accommodations.push({ ...obj, svg: 'accommodations' });
        return
      case 'rv parks':
        accommodations.push({ ...obj, svg: 'accommodations' });
        return
      case 'art museums':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'hiking':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'day spas':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'escape games':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'haunted houses':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'parks' :
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'landmarks & historical buildings':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'art galleries':
        attractions.push({ ...obj, svg: 'attractions' });  
        return   
      case 'walking tours':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'arts & entertainment':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'day camps':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'boat tours':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'boating' :
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'tours':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'bowling':
        attractions.push({ ...obj, svg: 'attractions' })
        return
      case 'climbing':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'historical tours':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'art classes':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'arcades' :
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'bubble soccer':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'gay bars':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'jazz & blues':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'performing arts':
        attractions.push({ ...obj, svg: 'attractions' });
        return
      case 'gastropubs':
        food.push({ ...obj, svg: 'food' });
        return
      case 'sandwiches':
        food.push({ ...obj, svg: 'food' });
        return
      case 'steakhouses':
        food.push({ ...obj, svg: 'food' });
        return
      case 'fast food' :
        food.push({ ...obj, svg: 'food' });
        return
      case 'chocolatiers & shops':
        food.push({ ...obj, svg: 'food' });
        return
      case 'cantonese' :
        food.push({ ...obj, svg: 'food' });
        return
      case 'sushi bars':
        food.push({ ...obj, svg: 'food' });
        return
      case 'asian fusion':
        food.push({ ...obj, svg: 'food' });
        return
      case 'diners':
        food.push({ ...obj, svg: 'food' });
        return
      case 'american (traditional)':
        food.push({ ...obj, svg: 'food' });
        return
      case 'american (new)':
        food.push({ ...obj, svg: 'food' });
        return
      case 'chinese' :
        food.push({ ...obj, svg: 'food' });
        return
      case 'mexican':
        food.push({ ...obj, svg: 'food' });
        return
      case 'pizza':
        food.push({ ...obj, svg: 'food' });
        return
      case 'burgers':
        food.push({ ...obj, svg: 'food' });
        return
      case 'coffee & tea':
        food.push({ ...obj, svg: 'food' });
        return
      case 'bakeries':
        food.push({ ...obj, svg: 'food' });
        return
      case 'breakfast & brunch':
        food.push({ ...obj, svg: 'food' });
        return
      case 'japanese':
        food.push({ ...obj, svg: 'food' });
        return
      case 'bars':
        drinks.push({ ...obj, svg: 'drinks' });
        return
      case 'wine bars':
        drinks.push({ ...obj, svg: 'drinks' });
        return
      case 'wine tasting room':
        drinks.push({ ...obj, svg: 'drinks' });
        return
      case 'beer, wine & spirits':
        drinks.push({ ...obj, svg: 'drinks' });
        return
      case 'lounges':
        drinks.push({ ...obj, svg: 'drinks' });
        return
      case 'dive bars':
        drinks.push({ ...obj, svg: 'drinks' });
        return
      case 'distilleries':
        drinks.push({ ...obj, svg: 'drinks' });
        return
      case 'breweries':
        drinks.push({ ...obj, svg: 'drinks' });
        return
      case 'beer bars':
        drinks.push({ ...obj, svg: 'drinks' });
        return
      case 'gyms':
        services.push({ ...obj, svg: 'services' });
        return
      case 'outdoor gear':
        services.push({ ...obj, svg: 'services' });
        return
      case 'gift shops':
        services.push({ ...obj, svg: 'services' });
        return
      case 'hunting & fishing supplies':
        services.push({ ...obj, svg: 'services' });
        return
      case 'body shops':
        services.push({ ...obj, svg: 'services' });
        return
      case 'medical centers':
        services.push({ ...obj, svg: 'services' });
        return
      case 'veterinarians':
        services.push({ ...obj, svg: 'services' });
        return
      case 'waxing':
        services.push({ ...obj, svg: 'services' });
        return
      case 'grocery':
        services.push({ ...obj, svg: 'services' });
        return
      default:
        miscellaneous.push(obj);
        return
    }
  })
 
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