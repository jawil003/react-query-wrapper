import React from "react";
import "./styles.css";
import { UseQuery } from "./react-query/useQuery";
import axios from "axios";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UseQuery<{ all: [{ text: string }] }, [string]>
          queryKey={["cats"]}
          queryFn={async () =>
            (await axios.get("https://cat-fact.herokuapp.com/facts"))
              .data as any
          }
        >
          {({ isLoading, data }) => (
            <h1>{!isLoading ? data?.all[0].text : undefined}</h1>
          )}
        </UseQuery>
      </div>
    );
  }
}

interface Response {}
