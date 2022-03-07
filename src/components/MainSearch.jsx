import React from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import JobResult from "./JobResult"
import uniqid from "uniqid"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { fetchJobs } from "../store/actions"
import { useState } from "react"

// const mapDispatchToProps = (dispatch) => ({
//   fetchJobs: (baseEndpoint, query) => dispatch(fetchJobs(baseEndpoint, query)),
// })

const MainSearch = () => {
  // state = {
  //   query: "",
  //   jobs: [],
  // };
  const [query, setQuery] = useState("")
  // const [jobs, setJobs] = useState([])

  const dispatch = useDispatch()

  const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search="

  const handleChange = (e) => {
    // this.setState({ query: e.target.value })
    setQuery(e.target.value)
  }
  const jobs = useSelector((state) => state.jobs.elements)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // this.props.fetchJobs(this.baseEndpoint, this.state.query)
    dispatch(fetchJobs(baseEndpoint, query))
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Link to="/favourites" className="btn btn-primary">
            Favourites
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.elements.map((jobData) => (
            <JobResult key={uniqid()} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default connect((s) => s, mapDispatchToProps)(MainSearch)
