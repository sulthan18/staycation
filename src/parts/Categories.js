import React from "react";
import Button from "elements/Button";

const Categories = ({ data }) => {
  return data.map((category, index1) => {
    const { name, items } = category;

    return (
      <section className="container" key={`category-${index1}`}>
        <h4 className="mb-3 font-weight-medium">{name}</h4>
        <div className="container-grid">
          {items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There is no property in this category
              </div>
            </div>
          ) : (
            items.map((item, index2) => {
              const { isPopular, imageUrl, name, _id, city, country } = item;
              const itemKey = `category-${index1}-item-${index2}`;
              const tag = isPopular ? (
                <div className="tag">
                  Popular <span className="font-weight-light">Choice</span>
                </div>
              ) : null;

              return (
                <div className="item column-3 row-1" key={itemKey}>
                  <div className="card">
                    {tag}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img src={imageUrl} alt={name} className="img-cover" />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${_id}`}
                        className="streched-link d-block text-gray-800"
                      >
                        <h5 className="h4">{name}</h5>
                      </Button>
                      <span className="text-gray-500">
                        {city}, {country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
};

export default Categories;
