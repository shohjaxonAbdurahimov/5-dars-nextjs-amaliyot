import { FaEye , FaCodeBranch, FaStar } from "react-icons/fa";

const fetchRepo = async (name) =>{
  const request = await fetch(`https://api.github.com/repos/shohjaxonAbdurahimov/${name}`,)

const repos = await request.json()

return repos 

}
async function Repo({name}){
  const repo = await fetchRepo(name)

return(
<div className="card">
<h3>{repo.name}</h3>
 <p>{repo.description}</p>

 <div className="repo-details">
  <span>
    <FaStar/>{repo.stargazers_count}
  </span>
  <span>
    <FaCodeBranch/>{repo.forks_count}
  </span>
  <span>
    <FaEye/>{repo.watchers_count}
  </span>
 </div>
</div>
)

}
export default Repo