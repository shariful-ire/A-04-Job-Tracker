const jobs = [
{ id:1, company:"TechNova", position:"Frontend Developer", location:"Dhaka", type:"Full-time", salary:"80,000 BDT", description:"Develop modern user interfaces.", status:"all" },
{ id:2, company:"CloudSync", position:"Cloud Engineer", location:"Remote", type:"Full-time", salary:"120k USD", description:"Manage cloud infrastructure.", status:"all" },
{ id:3, company:"InnoSoft", position:"Backend Developer", location:"Remote", type:"Full-time", salary:"100,000 BDT", description:"Build secure APIs.", status:"all" },
{ id:4, company:"DataViz", position:"Data Analyst", location:"New York", type:"Full-time", salary:"95k USD", description:"Analyze company data.", status:"all" },
{ id:5, company:"WebFlow", position:"UI Designer", location:"LA", type:"Part-time", salary:"70k USD", description:"Design web layouts.", status:"all" },
{ id:6, company:"AI Labs", position:"ML Engineer", location:"Remote", type:"Full-time", salary:"150k USD", description:"Develop ML models.", status:"all" },
{ id:7, company:"FinTech Pro", position:"Software Engineer", location:"Dhaka", type:"Full-time", salary:"90,000 BDT", description:"Build fintech apps.", status:"all" },
{ id:8, company:"NextGen", position:"DevOps Engineer", location:"Remote", type:"Full-time", salary:"110k USD", description:"Maintain CI/CD pipelines.", status:"all" }
];

const container = document.getElementById("jobsContainer");

function renderJobs() {
    container.innerHTML = "";

    jobs.forEach(job => {
        const card = document.createElement("div");
        card.className = "bg-white p-6 rounded shadow";

        card.innerHTML = `
            <h3 class="font-semibold">${job.company}</h3>
            <p>${job.position}</p>
            <p class="text-sm text-gray-500">${job.location} • ${job.type} • ${job.salary}</p>
            <p class="mt-2">${job.description}</p>

            <div class="mt-4 flex gap-3">
                <button onclick="setStatus(${job.id}, 'interview')" class="bg-green-600 text-white px-3 py-1 rounded">Interview</button>
                <button onclick="setStatus(${job.id}, 'rejected')" class="bg-red-600 text-white px-3 py-1 rounded">Rejected</button> </div>
        `;

        container.appendChild(card);
    });

    document.getElementById("totalCount").innerText = jobs.length;
}

renderJobs();

function setStatus(id, status) {
    const job = jobs.find(j => j.id === id);
    job.status = status;
    updateDashboard();
}

function updateDashboard() {
    document.getElementById("interviewCount").innerText =
        jobs.filter(j => j.status === "interview").length;

    document.getElementById("rejectedCount").innerText =
        jobs.filter(j => j.status === "rejected").length;
}