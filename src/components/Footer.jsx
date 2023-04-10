import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black">
      <div className="my-container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-4xl font-semibold text-white">
              Talent Spark
            </div>

            <p className="mt-4 max-w-xs text-gray-300">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>

            <div className="mt-8 flex gap-6">
              <img
                className="cursor-pointer"
                src="/public/assets/Icons/Group 9969.png"
                alt=""
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-white">Company</p>

              <nav className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      About Us
                    </span>
                  </li>

                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      Work
                    </span>
                  </li>

                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      Latest News
                    </span>
                  </li>
                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      Careers
                    </span>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-white">Product</p>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      Prototype
                    </span>
                  </li>

                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      Plans & Pricing
                    </span>
                  </li>

                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      Customers
                    </span>
                  </li>

                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      Integrations
                    </span>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-white">Support</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      Help Desk
                    </span>
                  </li>

                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      Sales
                    </span>
                  </li>

                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      Become a Partner
                    </span>
                  </li>
                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      Developers
                    </span>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-white">Contact</p>

              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      524 Broadway , NYC
                    </span>
                  </li>

                  <li>
                    <span className="cursor-pointer text-gray-400 transition hover:opacity-80">
                      +1 777 - 978 - 5570
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* copyright section starts here  */}
        <div className="mt-8 flex items-center justify-between border-t-2 border-zinc-600 pt-8 text-sm text-zinc-500">
          <p>@2023 CareerHub. All Rights Reserved</p>
          <p>Powered by Talent Spark</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
