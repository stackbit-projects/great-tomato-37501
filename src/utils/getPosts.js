import React from 'react';
import _ from 'lodash';



export default class Getposts extends React.Component {
    render() {
      return (
           fetch("https://wpintegrate.net/graphql", {
method: "POST",
headers: {
"content-type": "application/json",
},
body: JSON.stringify({
query: `mutation LoginUser {
login(input: {
clientMutationId: "233",
username: "chunt@dwsnow.com",
password: "C8JUBYqXtT5oQQ(&!fYbx3"
}) {
authToken
clientMutationId
user {
name
databaseId
nicename
}
}
}`,
}),
})
.then((res) => res.json())
.then((res) => {
console.log(res);
if (res.errors != undefined) {
this.message = res.errors[0].message;
} else if (res.data.login.authToken) {

}
}) 
        )
    }
}

