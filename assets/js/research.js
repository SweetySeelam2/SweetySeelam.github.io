const researchData = [
  {
    id: 1,
    title: "Customer Segmentation Using Machine Learning",
    image: "assets/images/research-page/customer_segmentation.png",
    description: "Built KMeans Clustering model to segment customers based on Age, Income, Spending Score; boosted targeted marketing effectiveness by 25–30%.",
    link: "https://customer-segmentation-ml.streamlit.app/"
  },
  {
    id: 2,
    title: "Marketing A/B Testing and Statistical Analysis",
    image: "assets/images/research-page/ab_testing.png",
    description: "Analyzed marketing campaigns with two-sample hypothesis testing; achieved a statistically significant 8–12% increase in conversion rates.",
    link: "https://marketingstrategyabtesting-eu4hug4vbgnflcdfxxdcyh.streamlit.app/"
  },
  {
    id: 3,
    title: "Conversion Prediction Using Logistic Regression",
    image: "assets/images/research-page/conversion_prediction.png",
    description: "Trained Logistic Regression model predicting customer conversion with 86% accuracy. Deployed on Streamlit for real-time business usage.",
    link: "https://conversion-prediction-ml-app-qnasm5hksaj9aguxoabfdh.streamlit.app/"
  }
];

// Dynamically populate table
const tableBody = document.querySelector(".main");

researchData.forEach((research) => {
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td><img src="${research.image}" alt="${research.title}" width="100"></td>
    <td>
      <h5>${research.title}</h5>
      <p>${research.description}</p>
      <a href="${research.link}" target="_blank" class="btn btn-primary">View Project</a>
    </td>
  `;
  tableBody.appendChild(tableRow);
});