import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";
function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>모든 포스트</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
export default AllPosts;
