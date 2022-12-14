import React, { Component } from "react";

import {
  PdfLoader,
  PdfHighlighter,
  Highlight,
  Popup,
} from "react-pdf-highlighter";

const getNextId = () => String(Math.random()).slice(2);

const parseIdFromHash = () =>
  document.location.hash.slice("#highlight-".length);

const resetHash = () => {
  document.location.hash = "";
};

const HighlightPopup = ({ comment }) => null;
const PRIMARY_PDF_URL =
  "https://firebasestorage.googleapis.com/v0/b/swan-app-6f0ce.appspot.com/o/visifit.pdf?alt=media&token=1dfb47ca-5e8c-4f6c-a5cc-2f79aba8f372";

const searchParams = new URLSearchParams(document.location.search);

const initialUrl = searchParams.get("url") || PRIMARY_PDF_URL;

class App extends Component {
  state = {
    url: initialUrl,
    highlights: [
      {
        content: {
          // text: " Type Checking for JavaScript",
        },
        position: {
          boundingRect: {
            x1: 40,
            x2: 250,
            y1: 200,
            y2: 500,
            width: 500,
            height: 900,
          },
          rects: [
            {
              x1: 40,
              x2: 250,
              y1: 670,
              y2: 800,
              width: 500,
              height: 900,
            },
          ],
          pageNumber: 2,
        },
        comment: {
          text: "",
          emoji: "",
        },
        id: "8245652131754351",
      },
    ],
    showHighlight: true,
  };
  componentDidUpdate() {
    if (this.props.paragraphs) {
      console.log(this.props.paragraphs);
      const { highlights } = this.state;
      document.location.hash = `highlight-${highlights[0].id}`;
    }
  }
  resetHighlights = () => {
    this.setState({
      highlights: [],
    });
  };

  scrollViewerTo = (highlight) => {};

  scrollToHighlightFromHash = () => {
    const highlight = this.getHighlightById(parseIdFromHash());

    if (highlight) {
      console.log({ highlight });

      this.scrollViewerTo(highlight);
    }
  };

  componentDidMount() {
    window.addEventListener(
      "hashchange",
      this.scrollToHighlightFromHash,
      false
    );
  }

  getHighlightById(id) {
    const { highlights } = this.state;

    return highlights.find((highlight) => highlight.id === id);
  }

  addHighlight(highlight) {
    const { highlights } = this.state;

    console.log("Saving highlight", highlight);

    this.setState({
      highlights: [{ ...highlight, id: getNextId() }, ...highlights],
    });
  }
  handleShowHighlight() {
    const { highlights } = this.state;
    document.location.hash = `highlight-${highlights[0].id}`;

    this.setState({
      showHighlight: true,
    });
  }
  updateHighlight(highlightId, position, content) {
    this.setState({
      highlights: this.state.highlights.map((h) => {
        const {
          id,
          position: originalPosition,
          content: originalContent,
          ...rest
        } = h;
        return id === highlightId
          ? {
              id,
              position: { ...originalPosition, ...position },
              content: { ...originalContent, ...content },
              ...rest,
            }
          : h;
      }),
    });
  }

  render() {
    const { url, highlights, showHighlight } = this.state;

    return (
      <div className="App" style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            height: "100vh",
            width: "50rem",
            position: "relative",
            margin: "auto",
          }}
        >
          <PdfLoader url={url} beforeLoad={<></>}>
            {(pdfDocument) => (
              <PdfHighlighter
                pdfDocument={pdfDocument}
                enableAreaSelection={(event) => event.altKey}
                onScrollChange={resetHash}
                scrollRef={(scrollTo) => {
                  this.scrollViewerTo = scrollTo;
                  this.scrollToHighlightFromHash();
                }}
                onSelectionFinished={() => <></>}
                highlightTransform={(
                  highlight,
                  index,
                  setTip,
                  hideTip,
                  viewportToScaled,
                  screenshot,
                  isScrolledTo
                ) => {
                  const component = (
                    <Highlight
                      isScrolledTo={isScrolledTo}
                      position={highlight.position}
                      comment={highlight.comment}
                    />
                  );

                  return (
                    <Popup
                      popupContent={<HighlightPopup {...highlight} />}
                      onMouseOver={(popupContent) =>
                        setTip(highlight, (highlight) => popupContent)
                      }
                      onMouseOut={hideTip}
                      key={index}
                      children={component}
                    />
                  );
                }}
                highlights={showHighlight ? highlights : []}
              />
            )}
          </PdfLoader>
        </div>
      </div>
    );
  }
}

export default App;
