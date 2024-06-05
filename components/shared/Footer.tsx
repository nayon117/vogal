import { Button } from "../ui/button";

const Footer = () => {
  return (
    <section className="">
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2">
            <div className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
              <div className="block text-teal-600 lg:hidden">
               Vogal
              </div>

              <div className="mt-8 space-y-4 lg:mt-0">
                <div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    Newsletter
                  </h2>

                  <p className="mt-4 max-w-lg text-gray-500">
                    Enter your email to receive daily news and get 20% off
                    coupon for all items. NO spam, we promise
                  </p>
                </div>

                <form className="mt-6 w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    {" "}
                    Email{" "}
                  </label>

                  <div className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="john@rhcp.com"
                      className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                    />

                    <Button className="mt-1 w-full rounded  px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none  sm:mt-0 sm:w-auto sm:shrink-0">
                        Subscribe
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="py-8 lg:py-16 lg:pe-16 ">
              <div className="hidden text-teal-600 lg:block">
                Vogal
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                

                <div>
                  <p className="font-medium text-gray-900">Company</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        About{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Meet the Team{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Accounts Review{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900">Helpful Links</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Contact{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        FAQs{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {" "}
                        Live Chat{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-8">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Cookies{" "}
                    </a>
                  </li>
                </ul>

                <p className="mt-8 text-xs text-gray-500">
                  &copy; 2022. Company Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
