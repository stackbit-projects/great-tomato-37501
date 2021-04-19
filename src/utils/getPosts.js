import _ from 'lodash';


export default {
    name: "UserLogin",
    data() {
        return {
            message: null,
            uname: null,
            password: null,
            authToken: null,
            nicename: null,
        };
    },
    methods: {
    UserLogin() {
        fetch("https://wpintegrate.net/graphql", {
            method: "POST",
            headers: {
            "content-type": "application/json",
            },
            body: JSON.stringify({
            query: `mutation LoginUser {
            login(input: {
            clientMutationId: "233",
            username: "${uname}",
            password: "${password}"
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
            this.authToken = res.data.login.authToken;
            this.nicename = res.data.login.user.nicename;
            }
        });
    },
    GetData() {
fetch("https://wpintegrate.net/graphql", {
method: "POST",
headers: {
"content-type": "application/json",
},
body: JSON.stringify({
query: `{
products(first:5, after:""){
pageInfo {
hasNextPage
endCursor
}
nodes{
name
id
... on SimpleProduct{
uri
price
}
}
}
}`,
}),
})
.then((res) => res.json())
.then((res) => {
console.log(res);
return res;
});
},
},
};
