import React from "react";

const Home = () => {
  return (
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 p-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="./image/bootstrap-themes.png"
          class="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          Responsive left-aligned hero with image
        </h1>
        <p class="lead">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
            Primary
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Default
          </button>
        </div>
      </div>

      <div class="container my-5">
        <div class="p-5 text-center bg-body-tertiary rounded-3">
          <svg
            class="bi mt-4 mb-3"
            width="100"
            height="100"
          >
            <use href="#bootstrap"></use>
          </svg>
          <h1 class="text-body-emphasis">Jumbotron with icon</h1>
          <p class="col-lg-8 mx-auto fs-5 text-muted">
            This is a custom jumbotron featuring an SVG image at the top, some
            longer text that wraps early thanks to a responsive{" "}
            <code>.col-*</code> class, and a customized call to action.
          </p>
          <div class="d-inline-flex gap-2 mb-5">
            <button
              class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
              type="button"
            >
              Call to action
              <svg class="bi ms-2" width="24" height="24">
                <use href="#arrow-right-short"></use>
              </svg>
            </button>
            <button
              class="btn btn-outline-secondary btn-lg px-4 rounded-pill"
              type="button"
            >
              Secondary link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
