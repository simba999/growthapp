import React, {Component, PropTypes} from 'react';

import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
  Style,
  Image
} from 'react-native-svg';

export default class CustomIcon extends Component {
  render() {
    if (this.props.name === "cross") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "15"}
          width={this.props.width ? this.props.width : "12"}
          viewBox="0 0 24 24"
          >
          <Path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          <Path d="M0 0h24v24H0z" fill="none"/>
        </Svg>
      );
    } else if (this.props.name === "location") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 24 24"
          >
          <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          <Path d="M0 0h24v24H0z" fill="none"/>
        </Svg>
      );
    }
    else if (this.props.name === "call") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 24 24"
          rotation={270}
          >
          <Path d="M0 0h24v24H0z" fill="none"/>
          <Path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </Svg>
      );
    }
    else if (this.props.name === "clock") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 24 24"
          >
          <Path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          <Path d="M0 0h24v24H0z" fill="none"/>
          <Path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </Svg>
      );
    }
    else if (this.props.name === "logo") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "75"}
          width={this.props.width ? this.props.width : "180"}
          viewBox="0 0 271.689 77.625"
          >
          <Path fill="#E63C2F" d="M17.421,27.383c3.212-5.198,7.936-7.748,14.171-7.748c13.32,0.472,19.933,9.165,19.933,26.168
            c0,16.627-7.747,25.034-23.239,25.319c-15.589,0.095-23.43-7.369-23.43-22.39V6.125h6.33c4.157,0,6.235,2.173,6.235,6.332V27.383z
            M17.421,45.238c-0.094,10.107,3.306,15.208,10.486,15.208s10.77-5.101,10.77-15.208c-0.283-9.637-3.779-14.36-10.581-14.36
            C21.295,30.878,17.798,35.601,17.421,45.238"/>
          <Path fill="#E63C2F" d="M69.287,33.429H56.723c1.511-9.26,8.03-13.793,19.555-13.793c13.794,0,20.784,4.533,21.068,13.793v17.003
            c0,13.793-8.313,19.934-21.824,20.879c-11.998,0.944-20.311-4.63-20.311-15.683c0.283-11.997,8.975-15.21,21.635-16.437
            c5.384-0.663,8.124-2.267,8.124-5.009c-0.284-2.833-2.929-4.251-8.124-4.251C72.405,29.932,69.949,31.067,69.287,33.429
            M85.159,49.866v-4.628c-2.929,1.227-6.33,2.267-10.014,3.022c-5.007,0.945-7.558,3.307-7.558,6.991
            c0.284,3.969,2.362,5.857,6.33,5.857C80.908,61.109,85.159,56.952,85.159,49.866"/>
          <Path fill="#E63C2F" d="M116.997,12.266v58.1h-12.565V6.125h6.519C114.257,6.125,116.997,8.96,116.997,12.266"/>
          <Path fill="#E63C2F" d="M145.526,71.5c-15.115-0.473-22.672-9.26-22.672-26.262c0-17.007,7.652-25.509,22.86-25.604
            c15.873,0,23.336,9.731,22.39,29.287h-32.307c0.471,7.65,3.777,11.523,9.917,11.523c2.93,0,5.669-1.227,8.125-3.588
            c1.135-1.229,2.55-1.795,4.251-1.795h9.259C164.608,65.643,157.808,71.5,145.526,71.5 M135.985,39.946h18.8
            c-0.757-6.611-3.873-10.014-9.259-10.014C140.142,29.932,136.931,33.334,135.985,39.946"/>
          <Path fill="#E63C2F" d="M196.354,30.878c-7.462,0-10.675,6.235-10.675,13.887v25.601h-12.563V6.125h6.328
            c4.156,0,6.234,2.173,6.234,6.332v14.925c6.424-7.369,14.265-9.447,23.618-6.14c6.991,2.55,10.297,9.257,9.92,20.122v29.002h-12.469
            V44.765C206.748,36.356,203.535,30.878,196.354,30.878"/>
          <Path fill="#E63C2F" d="M266.833,50.432c0,8.599-2.173,14.265-6.613,17.006c-4.441,2.55-9.353,3.873-14.738,3.873
            c-5.194,0-9.825-1.417-14.169-4.251c-4.346-2.74-6.52-8.219-6.52-16.628V20.39h12.564v32.594c0,5.572,2.835,8.313,8.502,8.313
            c5.669,0,8.504-2.741,8.504-8.313V26.627c-0.094-4.159,1.89-6.237,6.046-6.237h6.424V50.432z"/>
          <Rect y="0" fill="none" width="271.689" height="77.626"/>
        </Svg>
      );
    }
    else if (this.props.name === "music") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "22"}
          width={this.props.width ? this.props.width : "22"}
          viewBox="0 0 24 24"
          >
          <Path fill="#9e9e9e" d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/>
        </Svg>
      );
    }
    else if (this.props.name === "health") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "22"}
          width={this.props.width ? this.props.width : "22"}
          viewBox="0 0 24 24"
          >
          <Path fill="#ffffff" d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
        </Svg>
      );
    }
    else if (this.props.name === "drinks") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "22"}
          width={this.props.width ? this.props.width : "22"}
          viewBox="0 0 24 24"
          >
          <Path fill="#9e9e9e" d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/>
      </Svg>
      );
    }
    else if (this.props.name === "shopping") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "22"}
          width={this.props.width ? this.props.width : "22"}
          viewBox="0 0 24 24"
          >
          <Path fill="#9e9e9e" d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/>
      </Svg>
      );
    }
    else if (this.props.name === "food") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "22"}
          width={this.props.width ? this.props.width : "22"}
          viewBox="0 0 24 24"
          >
          <Path fill="#ffffff" d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
          <Path fill="none" d="M0 0h24v24H0z"/>
      </Svg>
      );
    }
    else if (this.props.name === "local_dining") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 24 24"
          >
          <Path d="M0 0h24v24H0z" fill="none"/>
          <Path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
      </Svg>
      );
    }
    else if (this.props.name === "user") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 341.333 341.333"
          >
          <Path d="M170.667,170.667c47.147,0,85.333-38.293,85.333-85.333C256,38.187,217.813,0,170.667,0S85.333,38.187,85.333,85.333     C85.333,132.373,123.52,170.667,170.667,170.667z" fill={this.props.fill ? this.props.fill :"#9e9e9e"}/>
          <Path d="M170.667,213.333C113.813,213.333,0,241.813,0,298.667v42.667h341.333v-42.667     C341.333,241.813,227.52,213.333,170.667,213.333z" fill={this.props.fill ? this.props.fill :"#9e9e9e"}/>
      </Svg>
      );
    }
    else if (this.props.name === "bold") {
      return (
            <Svg
              height={this.props.height ? this.props.height : "17"}
              width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 298.667 298.667"
          >
          <G>
          	<G>
          		<Path d="M218.133,144.853c20.587-14.4,35.2-37.653,35.2-59.52C253.333,37.227,216.107,0,168,0H34.667v298.667h150.187    c44.693,0,79.147-36.267,79.147-80.853C264,185.387,245.547,157.76,218.133,144.853z M98.667,53.333h64c17.707,0,32,14.293,32,32    s-14.293,32-32,32h-64V53.333z M173.333,245.333H98.667v-64h74.667c17.707,0,32,14.293,32,32S191.04,245.333,173.333,245.333z" fill="#757575"/>
          	</G>
          </G>
        </Svg>
      );
    }
    else if (this.props.name === "italic") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 67.796 67.796"
          >
          <G>
          	<Path d="M29.844,67.796h-8.669l12.98-51.58h8.668L29.844,67.796z M35.88,9.825L37.952,0h8.669l-2.071,9.825H35.88z" fill="#757575"/>
          </G>
        </Svg>
      );
    }
    else if (this.props.name === "underline") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 16 16"
          >
          <Path fill="#757575" d="M2 15h12v1h-12v-1z"/>
          <Path fill="#757575" d="M11 0v8.4c0 1.5-1.1 2.6-2.6 2.6h-0.8c-1.5 0-2.6-1.1-2.6-2.6v-8.4h-3v8.4c0 3.1 2.5 5.6 5.6 5.6h0.9c3.1 0 5.6-2.5 5.6-5.6v-8.4h-3.1z"/>
        </Svg>
      );
    }
    else if (this.props.name === "picture") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 84.723 84.723"
          >
          <G>
          	<G id="Image">
          		<G>
          			<Path d="M71.168,11.553H13.553C6.08,11.553,0,17.374,0,24.528v35.673C0,67.354,6.08,73.17,13.554,73.17h57.614     c7.475,0,13.555-5.812,13.555-12.969V24.528C84.723,17.374,78.641,11.553,71.168,11.553z M75.686,50.511L63.305,34.726     c-0.848-1.076-2.166-1.716-3.572-1.73c-1.476-0.007-2.733,0.602-3.604,1.662L42.654,51.16l-4.527-3.121     c-1.02-0.699-2.307-0.963-3.535-0.729c-1.232,0.24-2.311,0.964-2.964,1.992l-9.684,15.217h-8.392     c-2.489,0-4.517-1.934-4.517-4.315V24.528c0-2.385,2.025-4.325,4.517-4.325h57.614c2.488,0,4.518,1.94,4.518,4.325L75.686,50.511     L75.686,50.511z M24.482,27.287c-4.055,0-7.342,3.145-7.342,7.025c0,3.88,3.287,7.025,7.342,7.025     c4.058,0,7.345-3.145,7.345-7.025C31.826,30.432,28.539,27.287,24.482,27.287z" fill="#757575"/>
          		</G>
          	</G>
          </G>
        </Svg>
      );
    }
    else if (this.props.name === "link") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 40.447 40.446"
          >
          <G>
          	<Path d="M38.556,26.536l-7.323-7.324c-1.216-1.216-2.894-1.886-4.722-1.886c-1.502,0-3.019,0.456-4.377,1.273l-0.289-0.288   c1.834-3.064,1.687-6.802-0.612-9.1l-7.322-7.324C12.694,0.67,11.015,0,9.187,0C6.952,0,4.679,0.991,2.952,2.72l-0.23,0.229   c-3.25,3.252-3.623,8.167-0.832,10.958l7.324,7.323c1.217,1.219,2.893,1.889,4.721,1.889c1.502,0,3.018-0.457,4.377-1.273   l0.289,0.289c-1.834,3.062-1.687,6.801,0.613,9.1l7.32,7.322c1.218,1.217,2.896,1.89,4.725,1.89c2.234,0,4.51-0.992,6.238-2.726   l0.227-0.227C40.974,34.243,41.347,29.327,38.556,26.536z M13.933,18.119c-0.348,0-0.838-0.073-1.186-0.422l-7.324-7.324   C4.7,9.651,4.864,7.876,6.255,6.485l0.23-0.229C7.27,5.471,8.28,5.001,9.186,5.001c0.35,0,0.838,0.073,1.188,0.422l7.322,7.324   c0.375,0.374,0.504,1.032,0.355,1.771L14.032,10.5c-0.978-0.977-2.56-0.977-3.535,0c-0.978,0.976-0.978,2.559,0,3.535l4.015,4.013   C14.319,18.088,14.123,18.119,13.933,18.119z M34.183,33.963l-0.226,0.227c-0.784,0.785-1.795,1.256-2.7,1.256   c-0.349,0-0.839-0.074-1.188-0.424l-7.322-7.322c-0.375-0.373-0.504-1.031-0.354-1.771l4.019,4.02   c0.488,0.486,1.127,0.73,1.77,0.73c0.639,0,1.277-0.244,1.768-0.73c0.978-0.979,0.978-2.561,0-3.535l-4.014-4.014   c0.194-0.041,0.391-0.07,0.58-0.07c0.348,0,0.838,0.072,1.186,0.42l7.323,7.324C35.744,30.795,35.578,32.57,34.183,33.963z" fill="#757575"/>
          </G>
        </Svg>
      );
    }
    else if (this.props.name === "line") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 14.707 14.707"
          >
          <G>
          	<Rect x="6.275" y="0" width="2.158" height="14.707" fill="#bdbdbd"/>
          </G>
        </Svg>
      );
    }
    else if (this.props.name === "code") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 522.468 522.469"
          >
          <G>
          	<G>
          		<Path d="M325.762,70.513l-17.706-4.854c-2.279-0.76-4.524-0.521-6.707,0.715c-2.19,1.237-3.669,3.094-4.429,5.568L190.426,440.53    c-0.76,2.475-0.522,4.809,0.715,6.995c1.237,2.19,3.09,3.665,5.568,4.425l17.701,4.856c2.284,0.766,4.521,0.526,6.71-0.712    c2.19-1.243,3.666-3.094,4.425-5.564L332.042,81.936c0.759-2.474,0.523-4.808-0.716-6.999    C330.088,72.747,328.237,71.272,325.762,70.513z" fill="#757575"/>
          		<Path d="M166.167,142.465c0-2.474-0.953-4.665-2.856-6.567l-14.277-14.276c-1.903-1.903-4.093-2.857-6.567-2.857    s-4.665,0.955-6.567,2.857L2.856,254.666C0.95,256.569,0,258.759,0,261.233c0,2.474,0.953,4.664,2.856,6.566l133.043,133.044    c1.902,1.906,4.089,2.854,6.567,2.854s4.665-0.951,6.567-2.854l14.277-14.268c1.903-1.902,2.856-4.093,2.856-6.57    c0-2.471-0.953-4.661-2.856-6.563L51.107,261.233l112.204-112.201C165.217,147.13,166.167,144.939,166.167,142.465z" fill="#757575"/>
          		<Path d="M519.614,254.663L386.567,121.619c-1.902-1.902-4.093-2.857-6.563-2.857c-2.478,0-4.661,0.955-6.57,2.857l-14.271,14.275    c-1.902,1.903-2.851,4.09-2.851,6.567s0.948,4.665,2.851,6.567l112.206,112.204L359.163,373.442    c-1.902,1.902-2.851,4.093-2.851,6.563c0,2.478,0.948,4.668,2.851,6.57l14.271,14.268c1.909,1.906,4.093,2.854,6.57,2.854    c2.471,0,4.661-0.951,6.563-2.854L519.614,267.8c1.903-1.902,2.854-4.096,2.854-6.57    C522.468,258.755,521.517,256.565,519.614,254.663z" fill="#757575"/>
          	</G>
          </G>
        </Svg>
      );
    }
>>>>>>> add promotion screen added
  }
}
