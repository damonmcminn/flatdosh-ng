export default function(API) {

  return {

    do (user) {

      return API.register(user)
    }

  };

}
