import React from 'react';
import _ from 'lodash';



export default class Getposts extends React.Component {
    render() {
        let post = _.get(this.props, 'page', null);
        let date_type = _.get(this.props, 'date_type', null);
        return (
            <footer className="post-meta">
                <time className="published" dateTime={moment(_.get(post, 'frontmatter.date', null)).strftime('%Y-%m-%d %H:%M')}>{(date_type === 'short') ? (moment(_.get(post, 'frontmatter.date', null)).strftime('%B %d, %Y')) : moment(_.get(post, 'frontmatter.date', null)).strftime('%A, %B %e, %Y')}</time>{_.get(post, 'frontmatter.author', null) && ((() => {    let author = getData(this.props.pageContext.site.data, _.get(post, 'frontmatter.author', null));    return (', by ' + author.first_name  + author.last_name);})())}
            </footer>
        );
    }
}

export default function Getposts(){
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
