var app = angular.module("redditCloneApp", []);

app.controller("redditController", function($scope) {
  $scope.form = false;
  $scope.showForm = function() {
    if($scope.form === false) {
      $scope.form = true;
    } else {
      $scope.form = false;
    }
  }
  $scope.posts = [
    {
      postTitle: "Hawaii",
      postImg: "http://science-all.com/images/hawaii/hawaii-01.jpg",
      posterName: "Kathy Dieser",
      score: 0,
      commentsOpen: false,
      commentsFormOpen: false,
      postDate: Date.now(),
      posterLoc: "Denver",
      postDescrip: "Hawaii is the 50th and most recent state of the United States of America, receiving statehood on August 21, 1959.[23] Hawaii is the only U.S. state located in Oceania and the only one composed entirely of islands. It is the northernmost island group in Polynesia, occupying most of an archipelago in the central Pacific Ocean. Hawaii is the only U.S. state not located in the Americas. The state does not observe daylight saving time.",
      comments: [
        {
          text: 'I love this post!',
          username: 'Hoshi'
        },
        {
          text: 'This is a pretty good post.',
          username: 'Astro'
        }
      ]
    },
    {
      postTitle: "Bali",
      postImg: "http://www.retailnews.asia/wp-content/uploads/2016/02/lh-1-300x194.jpg",
      score: 0,
      commentsOpen: false,
      commentsFormOpen: false,
      postDate: Date.now(),
      posterName: "Kathy Dieser",
      posterLoc: "Denver",
      postDescrip: "Bali is an island and province of Indonesia. The province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan. It is located at the westernmost end of the Lesser Sunda Islands, between Java to the west and Lombok to the east. Its capital of Denpasar is located at the southern part of the island.",
      comments: [
        {
          text: 'I love this post!',
          username: 'Hoshi'
        },
        {
          text: 'This is a pretty good post.',
          username: 'Astro'
        }
      ]
    }
  ];
  $scope.addPost = function (post) {
    $scope.post.score = 0;
    $scope.post.comments = [];
    $scope.post.commentsOpen = false;
    $scope.post.commentsFormOpen = false;
    $scope.post.date = Date.now();
    $scope.posts.push(post);
    $scope.post = {};
    $scope.form = false;
  }
  $scope.addComment = function(post, comment) {
    post.comments.push(comment);
    comment = {};
  }
  $scope.showComments = function(state) {
    if(state.commentsOpen == false) {
      return state.commentsOpen = true;
    } else {
      state.commentsOpen = false;
    }
  }
  $scope.showCommentsForm = function(state) {
    if(state.commentsFormOpen == false) {
      return state.commentsFormOpen = true;
    } else {
      state.commentsFormOpen = false;
    }
  }
})