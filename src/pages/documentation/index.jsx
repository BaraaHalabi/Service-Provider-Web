import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import axios from "axios"; // Ensure axios is installed

const DocPage = () => {
  const [userName, setUserName] = useState(""); // Initialize state for user name

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userID");
        const token = localStorage.getItem("token");

        if (!userId || !token) {
          console.error("User ID or Token is undefined or null");
          return;
        }

        const response = await axios.get(
          `http://127.0.0.1:8000/api/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userData = response.data;
        const { name } = userData;

        setUserName(name); // Update the state with the user's name
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <section className={styles.page}>
      <h1>
        Thank you {userName}! <br></br> for buying our services.
        <br></br> You can now have the API & Script{" "}
      </h1>

      <div className={styles.tabs}>
        <div className={styles["tab-2"]}>
          <label htmlFor="tab2-1">Script</label>
          <input id="tab2-1" name="tabs-two" type="radio" defaultChecked />
          <div>
            <h4>Script</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              consequat id velit quis vestibulum. Nam id orci eu urna mollis
              porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales
              dui. Sed laoreet condimentum nisi a egestas.
              <a
                className={styles.documentation}
                href="https://flkt.mx/pitaya/componentes.html#pestanias"
              >
                Documentación en español
              </a>
              .
            </p>
            <p>
              Donec interdum ante ut enim consequat, quis varius nulla dapibus.
              Vivamus mollis fermentum augue a varius. Vestibulum in sapien at
              lectus gravida lobortis vulputate sed metus. Duis scelerisque
              justo et maximus efficitur. Donec eu eleifend quam. Curabitur
              aliquet commodo sapien eget vestibulum. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Vestibulum vel aliquet nunc, finibus posuere lorem. Suspendisse
              consectetur volutpat est ut ornare.
            </p>
          </div>
        </div>
        <div className={styles["tab-2"]}>
          <label htmlFor="tab2-2">API</label>
          <input id="tab2-2" name="tabs-two" type="radio" />
          <div>
            <h4>API</h4>
            <p>
              Quisque sit amet turpis leo. Maecenas sed dolor mi. Pellentesque
              varius elit in neque ornare commodo ac non tellus. Mauris id
              iaculis quam. Donec eu felis quam. Morbi tristique lorem eget
              iaculis consectetur. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Aenean at
              tellus eget risus tempus ultrices. Nam condimentum nisi enim,
              scelerisque faucibus lectus sodales at.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocPage;
