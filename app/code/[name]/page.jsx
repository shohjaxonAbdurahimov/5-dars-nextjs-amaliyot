import Repo from '@/components/Repo'
import RepoDirs from "@/components/RepoDirs"
import { Suspense } from 'react'

function RepoPage({ params: { name } }) {
  return (
    <div className="card">
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Dirs...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  )
}
export default RepoPage