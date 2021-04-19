import _ from 'lodash';


export default function getPosts(){
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
}
