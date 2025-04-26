const projectData = {
  "projects": [
    {
      "title": "Customer Segmentation Using KMeans Clustering",
      "image": "assets/images/customer_segmentation_app.png",
      "description": "Applied KMeans clustering on customer data to improve targeted marketing strategy.",
      "tools": "Python, Pandas, Scikit-learn, Streamlit",
      "impact": "25–35% revenue uplift from targeted clusters.",
      "liveDemo": "https://customer-segmentation-ml.streamlit.app/",
      "repoLink": "https://github.com/SweetySeelam2/customer-segmentation-ML"
    },
    {
      "title": "Marketing A/B Testing + Conversion Prediction (Statistical Testing + ML)",
      "image": "assets/images/ab_testing_screenshot.png",
      "description": "Performed A/B testing and predicted conversions using ML models to optimize marketing strategy.",
      "tools": "Python, Pandas, SciPy, Scikit-learn, Streamlit",
      "impact": "Projected $3.5M/month revenue uplift through marketing optimization.",
      "liveDemo": "https://marketingstrategyabtesting-eu4hug4vbgnflcdfxxdcyh.streamlit.app/",
      "repoLink": "https://github.com/SweetySeelam2/Marketing_Strategy_AB_Testing"
    },
    {
      "title": "Conversion Prediction Using Logistic Regression Model",
      "image": "assets/images/conversion_prediction_app.png",
      "description": "Built and deployed Logistic Regression model to predict customer conversion likelihood.",
      "tools": "Python, Pandas, Scikit-learn, Streamlit",
      "impact": "Enabled $1.2M/month increase by identifying 69% potential converters.",
      "liveDemo": "https://conversion-prediction-ml-app-qnasm5hksaj9aguxoabfdh.streamlit.app/",
      "repoLink": "https://github.com/SweetySeelam2/conversion-prediction-ml-streamlit"
    }
  ]
};

const projectCardsContainer = document.querySelector(".projectcards");

projectData.projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("col-md-4", "mb-4", "d-flex", "align-items-stretch", "fade-in-bottom");  // <--- added "fade-in-bottom" here!

  card.innerHTML = `
    <div class="card shadow-sm border-0 rounded">
      <img src="${project.image}" alt="${project.title}" class="card-img-top">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <p><strong>Tools:</strong> ${project.tools}</p>
        <p><strong>Impact:</strong> ${project.impact}</p>
        <div class="mt-auto">
          <a href="${project.liveDemo}" target="_blank" class="btn btn-primary btn-sm mr-2">View Project</a>
          <a href="${project.repoLink}" target="_blank" class="btn btn-outline-secondary btn-sm">View Code</a>
        </div>
      </div>
    </div>
  `;

  projectCardsContainer.appendChild(card);
});