export const cleanData = (data) => {
  data.trip.origin = data.trip.origin.replace(/:|=/gi, '').replace(/>/gi, ':').replace(/"/gi, ''); 
  data.trip.destination = data.trip.destination.replace(/:|=/gi, '').replace(/>/gi, ':').replace(/"/gi, '');
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
        accommodations.push(obj);
        return;
      case 'bed & breakfast':
        accommodations.push(obj);
        return
      case 'guest houses':
        accommodations.push(obj);
        return
      case 'resorts':
        accommodations.push(obj);
        return
      case 'art museums':
        attractions.push(obj);
        return
      case 'haunted houses':
        attractions.push(obj);
        return
      case 'parks' :
        attractions.push(obj);
        return
      case 'landmarks & historical buildings':
        attractions.push(obj);
        return
      case 'art galleries':
        attractions.push(obj);  
        return   
      case 'walking tours':
        attractions.push(obj);
        return
      case 'arts & entertainment':
        attractions.push(obj);
        return
      case 'day camps':
        attractions.push(obj);
        return
      case 'boat tours':
        attractions.push(obj);
        return
      case 'boating' :
        attractions.push(obj);
        return
      case 'tours':
        attractions.push(obj);
        return
      case 'climbing':
        attractions.push(obj);
        return
      case 'historical tours':
        attractions.push(obj);
        return
      case 'art classes':
        attractions.push(obj);
        return
      case 'fast food' :
        food.push(obj);
        return
      case 'chocolatiers & shops':
        food.push(obj);
        return
      case 'cantonese' :
        food.push(obj);
        return
      case 'sushi bars':
        food.push(obj);
        return
      case 'asian fusion':
        food.push(obj);
        return
      case 'diners':
        food.push(obj);
        return
      case 'american (traditional)':
        food.push(obj);
        return
      case 'american (new)':
        food.push(obj);
        return
      case 'chinese' :
        food.push(obj);
        return
      case 'mexican':
        food.push(obj);
        return
      case 'pizza':
        food.push(obj);
        return
      case 'burgers':
        food.push(obj);
        return
      case 'coffee & tea':
        food.push(obj);
        return
      case 'bakeries':
        food.push(obj);
        return
      case 'breakfast & brunch':
        food.push(obj);
        return
      case 'japanese':
        food.push(obj);
        return
      case 'bars':
        drinks.push(obj);
        return
      case 'lounges':
        drinks.push(obj);
        return
      case 'dive bars':
        drinks.push(obj);
        return
      case 'distilleries':
        drinks.push(obj);
        return
      case 'breweries':
        drinks.push(obj);
        return
      case 'beer bars':
        drinks.push(obj);
        return
      case 'gyms':
        services.push(obj);
        return
      case 'outdoor gear':
        services.push(obj);
        return
      case 'gift shops':
        services.push(obj);
        return
      case 'hunting & fishing supplies':
        services.push(obj);
        return
      case 'body shops':
        services.push(obj)
        return
      case 'grocery':
        services.push(obj);
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