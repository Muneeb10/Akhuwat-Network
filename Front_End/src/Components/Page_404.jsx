import React from "react";

const Page_404 = () => {
  return (
    <>
      <section className="relative min-h-screen z-10 flex items-center justify-center bg-[#f0f2f3]">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-[#029fae] sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-[#029fae]">
                  Oops! That page can’t be found
                </h4>
                <p className="mb-8 text-lg text-[#029fae]">
                  The page you are looking for may have been deleted.
                </p>
                <a
                  href="/"
                  className="inline-block rounded-lg border border-[#029fae] px-8 py-3 text-center text-base font-semibold text-[#029fae] transition hover:bg-[#029fae] hover:text-white"
                >
                  Go To Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page_404;
