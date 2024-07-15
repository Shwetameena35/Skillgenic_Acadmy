import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { TfiBag } from "react-icons/tfi";
import girlpic from "./images/Girlpic.png";
function Apply() {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right,  rgba(70, 45, 161, 1),rgba(15, 135, 179, 1))`,
    padding: "5px 10px",
    borderRadius: "5px",
    color: "#fff",
    position: "relative",
    top: "12px",
    left: "56px",
  };

  return (
    <>
      <div className="w-full mb-3">
        <Container className="gap-3">
          <Row className="h-40 gap-3">
            <Col className="w-1/3 h-full bg-gray-50 rounded-lg p-2">
              <div className="flex justify-between">
                <p className="text-sm font-bold">Graphic Designer</p>
                <IoShareSocialOutline />
              </div>
              <div className="flex items-center">
                <IoLocationOutline />
                <p className="text-sm text-gray-500">Jaipur</p>
              </div>
              <div className="p-3">
                <Row className="gap-3">
                  <Col
                    className="text-sm border rounded flex items-center gap-1 text-gray-500"
                    xs="6"
                    md="5"
                  >
                    <GoHome /> Work From Home
                  </Col>
                  <Col
                    md="auto"
                    className="text-sm border rounded flex items-center gap-1 text-gray-500 w-28 h-8"
                  >
                    <TfiBag /> 1-3 Years
                  </Col>
                  <Col xs lg="3" className="text-sm rounded border w-20 pt-1">
                    <p
                      style={{ color: "rgba(66, 52, 162, 1)" }}
                      className=" font-semibold"
                    >
                      3-6 LPA
                    </p>
                  </Col>
                </Row>
              </div>
              <div>
                <Container>
                  <Row>
                    <Col xs="2" md="2" className="">
                      <img
                        className="rounded-full"
                        src={girlpic}
                        width={40}
                        height={40}
                        alt=""
                      />
                    </Col>
                    <Col xs="8" md="6" className="flex flex-col text-sm">
                      <p className=" font-semibold">Deepika</p>
                      <p className="text-gray-500">Magneto Cleantech</p>
                    </Col>
                    <Col className="-ml-4 -mt-2">
                      <button
                        style={gradientStyle}
                        className="rounded-lg border"
                      >
                        Apply Now
                      </button>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col className="w-1/3 h-full bg-gray-50 rounded-lg p-2">
              <div className="flex justify-between">
                <p className="text-sm font-bold">Graphic Designer</p>
                <IoShareSocialOutline />
              </div>
              <div className="flex items-center">
                <IoLocationOutline />
                <p className="text-sm text-gray-500">Jaipur</p>
              </div>
              <div className="p-3">
                <Row className="gap-3">
                  <Col
                    className="text-sm border rounded flex items-center gap-1 text-gray-500"
                    xs="6"
                    md="5"
                  >
                    <GoHome /> Work From Home
                  </Col>
                  <Col
                    md="auto"
                    className="text-sm border rounded flex items-center gap-1 text-gray-500 w-28 h-8"
                  >
                    <TfiBag /> 1-3 Years
                  </Col>
                  <Col xs lg="3" className="text-sm rounded border w-20 pt-1">
                    <p
                      style={{ color: "rgba(66, 52, 162, 1)" }}
                      className=" font-semibold"
                    >
                      3-6 LPA
                    </p>
                  </Col>
                </Row>
              </div>
              <div>
                <Container>
                  <Row>
                    <Col xs="2" md="2" className="">
                      <img
                        className="rounded-full"
                        src={girlpic}
                        width={40}
                        height={40}
                        alt=""
                      />
                    </Col>
                    <Col xs="8" md="6" className="flex flex-col text-sm">
                      <p className=" font-semibold">Deepika</p>
                      <p className="text-gray-500">Magneto Cleantech</p>
                    </Col>
                    <Col className="-ml-4 -mt-2">
                      <button
                        style={gradientStyle}
                        className="rounded-lg border"
                      >
                        Apply Now
                      </button>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Apply;
