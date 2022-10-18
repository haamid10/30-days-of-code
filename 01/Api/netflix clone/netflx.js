<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Netflix Clone</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <script src="https://kit.fontawesome.com/c939d0e917.js"></script>
  </head>
  <body>
    <header>
    </header>
    <main>
      <div class="featured">
        <h2>Title</h2>
        <div class="featured__buttons">
          <button class="button__play"><i class="fas fa-play"></i>Play</button>
          <button>My List</button>
        </div>
        <div class="featured__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique
          magna magna, vit...
        </div>
      </div>
      <div class="netflixOriginals">
        <div class="original__header">
          <h2>NETFLIX ORIGINALS</h2>
        </div>
        <div class="original__movies">
          <!-- Orignal Movies List Here -->
        </div>
      </div>
      <div class="movies">
        <div class="movies__header">
          <h2>Wishlist</h2>
        </div>
        <div id="wishlist" class="movies__container"></div>
        <div class="movies__header">
          <h2>Trending Now</h2>
        </div>
        <div id="trending" class="movies__container">
          <!-- Trending Movies List Here -->
        </div>
        <div class="movies__header">
          <h2>Top Rated</h2>
        </div>
        <div id="top_rated" class="movies__container">
          <!-- Top Rated Movies List Here -->
        </div>
      </div>
    </main>
    <!-- Modal -->
    <div
      class="modal fade"
      id="trailerModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span class="movieNotFound">Trailer Not Found</span>
            <iframe
              id="movieTrailer"
              height="400"
              src=""
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
      crossorigin="anonymous"
    ></script>
    <script src="script.js"></script>
  </body>
</html>
