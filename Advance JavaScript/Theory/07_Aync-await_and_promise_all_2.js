function fetchPostData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post Data Fetched");
        }, 2000);
    });
}

function fetchCommentData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Comment Data Fetched");
        }, 3000);
    });
}

// way1
async function getBlogData1() {
    try {
        console.log("Fetching blog data");

        const postData = await fetchPostData();
        const commentData = await fetchCommentData();

        console.log(`Post Data: ${postData}`);
        console.log(`Comment Data: ${commentData}`);

        console.log("fetch complete");
    }
    catch (error) {
        console.log("Error Fetching data", error);
    }
}

getBlogData1();

// way2
async function getBlogData2() {
    try {
        console.log("Fetching blog data");

        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);

        console.log(`Post Data: ${postData}`);
        console.log(`Comment Data: ${commentData}`);

        console.log("fetch complete");
    }
    catch (error) {
        console.log("Error Fetching data", error);
    }
}

getBlogData2();