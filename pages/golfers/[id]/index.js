import { useRouter } from "next/router"
import useUserScores from "../../../lib/useUserScores"
import ScoreCard from '../../../components/ScoreCard'
import Layout from "../../../components/Layout"

const Golfers = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useUserScores(id)

  const filteredScores = data?.scores?.map(score => (
    <ScoreCard
      key={score.id}
      id={score.id}
      totalScore={score.total_score}
      playedAt={score.played_at}
      userId={score.user_id}
      userName={data.name}
    />
   ))

  return (
    <Layout>
      <>
        {error ? (
          <>
          {`${error.info.errors}`}
          </>
        ) : (
          <>
            <h1>{`GOLFER: ${data?.name}`}</h1>
            {data?.scores && filteredScores}
          </>
        )}
      </>
    </Layout>
  )
}

export default Golfers 
