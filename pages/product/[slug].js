import { useRouter } from "next/router";
import Error from "next/error";
import { useEffect, useState } from "react";
import mongoose from "mongoose";
import Product from "../../models/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Post = ({ buyNow, addToCart, product, varient, error }) => {
  const router = useRouter();
  const { slug } = router.query;

  const [pin, setPin] = useState();
  const [service, setService] = useState();
  const [color, setColor] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    if (!error) {
      setColor(product.color)
      setSize(product.size)
    }
  }, [router.query])


  const checkServieablity = async () => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinJson = await pins.json();
    if (Object.keys(pinJson).includes(pin)) {
      setService(true);
      toast.success("Your pincode is serviceable", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setService(false);
      toast.error("sorry ! Your pincode is not serviceable", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
    console.log(setPin(e.target.value));
  };



  const refreshVarient = (newcolor, newsize) => {
    let url = `${process.env.NEXT_PUBLIC_HOST}/product/${varient[newcolor][newsize]["slug"]}`;
    router.push(url)
  };

  if (error == 404) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full px-24 lg:h-auto h-64 object-cover object-top rounded"
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                MUFTI
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}({product.size}/{product.color})
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">


                {/*  color div  */}

                <div className="flex">
                  <span className="mr-3">Color</span>

                  {Object.keys(varient).includes("blue") && Object.keys(varient["blue"]).includes(size) && (<button onClick={() => { refreshVarient("blue", size) }} className={`border-2 ${color === "blue" ? "border-black" : "border-gray-300"} ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none`} ></button>)}
                  {Object.keys(varient).includes("pink") && Object.keys(varient["pink"]).includes(size) && (<button onClick={() => { refreshVarient("pink", size) }} className={`border-2 ${color === "pink" ? "border-black" : "border-gray-300"} ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none`} ></button>)}
                  {Object.keys(varient).includes("yellow") && Object.keys(varient["yellow"]).includes(size) && (<button onClick={() => { refreshVarient("yellow", size) }} className={`border-2 ${color === "yellow" ? "border-black" : "border-gray-300"} ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none`} ></button>)}
                  {Object.keys(varient).includes("red") && Object.keys(varient["red"]).includes(size) && (<button onClick={() => { refreshVarient("red", size) }} className={`border-2 ${color === "red" ? "border-black" : "border-gray-300"} ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none`} ></button>)}
                  {Object.keys(varient).includes("purple") && Object.keys(varient["purple"]).includes(size) && (<button onClick={() => { refreshVarient("purple", size) }} className={`border-2 ${color === "purple" ? "border-black" : "border-gray-300"} ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none`} ></button>)}

                </div>

                {/* size div  */}

                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => {
                        refreshVarient(color, e.target.value);
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10"
                    >
                      {color && Object.keys(varient[color]).includes("S") && <option value={"S"}>S</option>}
                      {color && Object.keys(varient[color]).includes("M") && <option value={"M"}>M</option>}
                      {color && Object.keys(varient[color]).includes("L") && <option value={"L"}>L</option>}
                      {color && Object.keys(varient[color]).includes("XL") && <option value={"XL"}>XL</option>}
                      {color && Object.keys(varient[color]).includes("XXL") && <option value={"XXL"}>XXL</option>}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                {product.availableQty <= 0 && <span className="title-font  font-medium text-xl text-gray-900">
                  Out of stock !
                </span>}
                {product.availableQty > 0 && <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{product.price}
                </span>}

                <button
                  disabled={product.availableQty <= 0}
                  onClick={() => {
                    addToCart(slug, 1, product.price, product.title, size, color);
                  }}
                  className="flex ml-8 disabled:bg-pink-300 text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Add to cart
                </button>
                <button
                  disabled={product.availableQty <= 0}
                  onClick={() => {
                    buyNow(slug, 1, product.price, product.title, size, color);
                  }}
                  className="flex ml-2 disabled:bg-pink-300 text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Buy now
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>

              <div className="pin mt-4 flex space-x-2 text-sm">
                <input
                  onChange={onChangePin}
                  placeholder="Entre your pincode"
                  type="text"
                  className=" border-2 border-pink-400 rounded-lg px-2"
                />
                <button
                  onClick={checkServieablity}
                  className="flex ml-14 text-white bg-pink-500 border-0  py-2 px-3 focus:outline-none hover:bg-pink-600 rounded"
                >
                  check
                </button>
              </div>
              {!service && service != null && (
                <div className="text-red-500 ">
                  sorry! we do not delivered to this pin code
                </div>
              )}

              {service && service != null && (
                <div className="text-green-500 ">
                  yeh ! this pincode is serviceable
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  let error = null;
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI, () => {
      console.log("connected");
    });
  }
  let product = await Product.findOne({ slug: context.query.slug })
  if (product == null) {
    return {
      props: {
        error: 404,
      }
    }
  }
  let varient = await Product.find({ title: product.title })

  let colorSizeSlug = {}
  for (let item of varient) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
    else {
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
  }

  return {
    props: {
      error: error,
      product: JSON.parse(JSON.stringify(product)),
      varient: JSON.parse(JSON.stringify(colorSizeSlug)),
    }, // will be passed to the page component as props
  };
}

export default Post;
