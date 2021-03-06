import { graphql } from "react-relay"
import ShowInfo from "../Routes/ShowInfo"
import { setupTestWrapper } from "v2/DevTools/setupTestWrapper"

jest.unmock("react-relay")

const { getWrapper } = setupTestWrapper({
  Component: ShowInfo,
  query: graphql`
    query ShowInfo_Test_Query {
      show(id: "xxx") {
        ...ShowInfo_show
      }
    }
  `,
})

describe("ShowInfo", () => {
  it("renders the info page", () => {
    const wrapper = getWrapper({ Partner: () => ({ type: "Gallery" }) })

    expect(wrapper.find("h1")).toHaveLength(1)
    expect(wrapper.find("h1").text()).toEqual("About")
    expect(wrapper.find("h2").text()).toEqual("Gallery")
  })
})
