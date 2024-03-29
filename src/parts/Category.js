import Button from "element/Button";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <Fade down>
        <section className="container" key={`category-${index1}`}>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.itemId.length === 0 ? (
              <div className="row">
                <div className="col-auto align-item-center">
                  There is No Property at this Category
                </div>
              </div>
            ) : (
              category.itemId.map((item, index2) => {
                return (
                  <div
                    className="item column-3 row-1"
                    key={`category-${index1}-item-${index2}`}>
                    <Fade bottom delay={300 * index2}>
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag">
                            Popular{" "}
                            <span className="font-weight-light">Choice</span>
                          </div>
                        )}
                        <figure className="img-wrapper" style={{ height: 180 }}>
                          <img
                            src={
                              item.imageId[0]
                                ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                                : ""
                            }
                            alt={item.title}
                            className="img-cover"
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <Button
                            type="link"
                            href={`/properties/${item._id}`}
                            className="stretched-link d-blok text-gray-800">
                            <h5 className="h4">{item.title}</h5>
                          </Button>
                          <span className="text-gray-500">
                            {item.city} ,{item.country}
                          </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </Fade>
    );
  });
}
