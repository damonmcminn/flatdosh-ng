export default function(http) {

  return {

    do (user) {
      console.log(`Registering ${user.email}`);
    }

  };

}
