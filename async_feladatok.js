async function GetAllPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  
  async function GetPostById(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) throw new Error(`Failed to fetch post with ID ${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching post with ID ${id}:`, error);
    }
  }
  
  async function CreatePost() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) throw new Error('Failed to create post');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }
  
  async function UpdatePost(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: id,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) throw new Error(`Failed to update post with ID ${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error updating post with ID ${id}:`, error);
    }
  }
  
  async function PatchPost(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) throw new Error(`Failed to patch post with ID ${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error patching post with ID ${id}:`, error);
    }
  }
  
  async function DeletePost(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error(`Failed to delete post with ID ${id}`);
      return { message: 'Post deleted successfully', id };
    } catch (error) {
      console.error(`Error deleting post with ID ${id}:`, error);
    }
  }
  
  console.log(await GetAllPosts())
  console.log(await GetPostById(3))
  console.log(await CreatePost())
  console.log(await UpdatePost(4))
  console.log(await PatchPost(10))
  console.log(await DeletePost(100))