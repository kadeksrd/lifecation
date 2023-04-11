import Button from "element/Button";
import React from "react";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer className="border">
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <div className="brand-tagline">
              <p>We kaboom your beauty holiday instantly and memorable.</p>
            </div>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginner</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/propeties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@lifecation.id">
                  support@lifecation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622122081996">
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>Lifecation, Padjajaran, Bandung</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center copyrights">
        Copyright 2023 • All rights reserved • Lifecation
      </div>
    </footer>
  );
}
