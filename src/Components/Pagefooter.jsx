
import React from "react";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function Pagefooter() {
  return (
    <div>
      <Footer className="bg-purple-900 text-white">
        <div className="w-full max-w-7xl mx-auto">

          {/* Main Footer */}
          <div className="grid w-full grid-cols-1 gap-10 px-4 py-8 sm:grid-cols-2 md:grid-cols-4 lg:px-8">

            {/* Brand */}
            <div>
              <FooterBrand
                href="#"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="E-Cart Logo"
                name="E-Cart"
                className="text-white"
              />

              <p className="mt-4 max-w-xs text-sm leading-6 text-purple-200">
                Your one-stop destination for quality products, great deals,
                and a smooth online shopping experience.
              </p>
            </div>

            {/* E-Cart */}
            <div>
              <FooterTitle
                title="E-Cart"
                className="mb-4 text-white"
              />

              <FooterLinkGroup col>
                <FooterLink
                  href="#"
                  className="text-purple-200 transition hover:text-white"
                >
                  About Us
                </FooterLink>

                <FooterLink
                  href="#"
                  className="text-purple-200 transition hover:text-white"
                >
                  Our Products
                </FooterLink>

                <FooterLink
                  href="#"
                  className="text-purple-200 transition hover:text-white"
                >
                  Offers
                </FooterLink>

                <FooterLink
                  href="#"
                  className="text-purple-200 transition hover:text-white"
                >
                  Contact Us
                </FooterLink>
              </FooterLinkGroup>
            </div>

            {/* Quick Links */}
            <div>
              <FooterTitle
                title="Quick Links"
                className="mb-4 text-white"
              />

              <FooterLinkGroup col>
                <FooterLink
                  href="#"
                  className="text-purple-200 transition hover:text-white"
                >
                  Home
                </FooterLink>

                <FooterLink
                  href="#"
                  className="text-purple-200 transition hover:text-white"
                >
                  Products
                </FooterLink>

                <FooterLink
                  href="#"
                  className="text-purple-200 transition hover:text-white"
                >
                  Wishlist
                </FooterLink>

                <FooterLink
                  href="#"
                  className="text-purple-200 transition hover:text-white"
                >
                  Cart
                </FooterLink>
              </FooterLinkGroup>
            </div>

            {/* Support */}
            <div>
              <FooterTitle
                title="Support"
                className="mb-4 text-white"
              />

              <FooterLinkGroup col>
                <FooterLink
                  href="#"
                  className="text-purple-200 transition hover:text-white"
                >
                  Help Center
                </FooterLink>

                <FooterLink
                  href="#"
                  className="text-purple-200 transition hover:text-white"
                >
                  Shipping & Delivery
                </FooterLink>

                <FooterLink
                  href="#"
                  className="text-purple-200 transition hover:text-white"
                >
                  Returns
                </FooterLink>

                <FooterLink
                  href="#"
                  className="text-purple-200 transition hover:text-white"
                >
                  Privacy Policy
                </FooterLink>
              </FooterLinkGroup>
            </div>

          </div>

          <FooterDivider className="border-purple-700" />

          {/* Bottom */}
          <div className="flex w-full flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row lg:px-8">

            <FooterCopyright
              href="#"
              by="E-Cart™"
              year={2026}
              className="text-purple-200"
            />

            <div className="flex space-x-5">

              <FooterIcon
                href="#"
                icon={BsFacebook}
                className="text-purple-200 transition hover:text-white"
              />

              <FooterIcon
                href="#"
                icon={BsInstagram}
                className="text-purple-200 transition hover:text-white"
              />

              <FooterIcon
                href="#"
                icon={BsTwitter}
                className="text-purple-200 transition hover:text-white"
              />

              <FooterIcon
                href="#"
                icon={BsGithub}
                className="text-purple-200 transition hover:text-white"
              />

            </div>

          </div>

        </div>
      </Footer>
    </div>
  );
}
