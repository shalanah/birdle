import React from "react";
import { maxAttempts } from "../utils";

const birds = [
  // Flying bird right
  <g>
    <path
      d="M575.65,66.07c-3.22,6.62-4.33,13.37-4.33,19.51,0,13.83,5.56,24.65,5.6,24.74,.3,.59,1.03,.82,1.62,.52,.59-.3,.82-1.03,.52-1.62v-.02c-.29-.55-5.35-10.85-5.34-23.62,0-5.86,1.05-12.23,4.08-18.46,.29-.6,.04-1.31-.55-1.6-.6-.29-1.31-.04-1.6,.55Z"
      fill="#42210b"
    />
    <path
      d="M582.05,106.68l-6.07-4.85c-.31-.25-.72-.33-1.1-.21-.38,.11-.68,.41-.79,.78l-2.35,7.4c-.2,.63,.15,1.31,.78,1.51,.63,.2,1.31-.15,1.51-.78l1.82-5.74,4.71,3.76c.52,.41,1.27,.33,1.69-.19,.41-.52,.33-1.27-.19-1.69Z"
      fill="#42210b"
    />
    <path
      d="M562.66,66.45c-3.22,6.62-4.33,13.37-4.33,19.51,0,13.83,5.56,24.65,5.6,24.74,.3,.59,1.03,.82,1.62,.52,.59-.3,.82-1.03,.52-1.62v-.02c-.29-.55-5.35-10.85-5.34-23.62,0-5.86,1.05-12.23,4.08-18.46,.29-.6,.04-1.31-.55-1.6-.6-.29-1.31-.04-1.6,.55Z"
      fill="#42210b"
    />
    <path
      d="M569.05,107.06l-6.07-4.84c-.31-.25-.72-.32-1.1-.21-.38,.11-.68,.41-.79,.78l-2.35,7.4c-.2,.63,.15,1.31,.78,1.51,.63,.2,1.31-.15,1.51-.78l1.82-5.74,4.7,3.76c.52,.41,1.27,.33,1.69-.19,.41-.52,.33-1.27-.19-1.69Z"
      fill="#42210b"
    />
    <path
      d="M589.49,26.98s-1.3-8.85-8.75-7.31c-7.46,1.54-3.48,24.28-20.82,32.2,32.92,8.74,44.02-17.29,40.43-23.32-3.59-6.03-10.85-1.57-10.85-1.57Z"
      fill="#a50738"
    />
    <path
      d="M543.54,10.42c-37.81,10.78-17.88,49.65-17.88,49.65,0,0,13.53,40.44,48.13,31.04,34.6-9.4,29.53-35.51,29.53-35.51-36.89,6.57-21.96-55.95-59.78-45.18Z"
      fill="#ef7098"
    />
    <path
      d="M522.97,61.11c-.68-1.63-10.66-18.42-4.18-34.02,3.36-8.1,9.77-14.08,19.04-17.77,1.55-.62,3.21-1.18,4.92-1.67,21.78-6.21,30.8,9.98,36.29,25.25,3.48,9.65,8.08,19.07,13.09,18.44,4.17-.53,14.52-21.14,21.23-17.29,6.72,3.85-10.71,17.68-10.71,17.68,0,0,15.17-11.45,18.09-7.37,2.35,3.28-7.39,10.81-11.28,13.63,0,.11,17.05-7.16,18.65-3.31,1.4,3.37-9.04,10.82-23.21,13.98-14.17,3.16-26.63-1.87-26.63-1.87l-.15-.07c-.44,1.59-1.42,2.85-2.83,3.41-2.06,.82-4.48-.09-6.21-2.09,.12,2.65-1.01,4.97-3.08,5.79-2.07,.82-4.48-.09-6.21-2.09,.12,2.65-1.01,4.97-3.08,5.79-2.07,.82-4.48-.09-6.21-2.09,.12,2.65-1.01,4.97-3.08,5.79-2.07,.82-4.48-.09-6.21-2.09,.12,2.65-.74,4.86-2.81,5.68l-.94-.87c-9.51-9.43-13.98-21.46-14.47-22.83Z"
      fill="#d92554"
    />
    <path
      d="M584.49,18.98s-1.3-8.85-8.75-7.31c-7.46,1.54-3.48,24.28-20.82,32.2,32.92,8.74,44.02-17.29,40.43-23.32-3.59-6.03-10.85-1.57-10.85-1.57Z"
      fill="#ef7098"
    />
    <path
      d="M518.8,31.18s2.02,5.43-1.15,8.89l-9.79-5.78,10.94-3.11Z"
      fill="#fbb03b"
    />
    <path
      d="M529.83,27.79c-.4,2.17,.67,4.19,2.39,4.51,1.72,.32,3.43-1.19,3.83-3.37,.4-2.18-.67-4.19-2.39-4.51-1.72-.31-3.43,1.19-3.83,3.37Z"
      fill="#42210b"
    />
  </g>,
  // flying bird left
  <g>
    <path
      d="M134.7,232.15c1.83,4.89,2.53,9.75,2.53,14.34,0,7.62-1.94,14.51-3.9,19.48-.98,2.49-1.95,4.5-2.68,5.87-.36,.69-.67,1.22-.88,1.58-.1,.18-.19,.31-.24,.4l-.06,.1-.02,.03c-.36,.56-.19,1.3,.37,1.66,.56,.36,1.3,.19,1.66-.37,.05-.1,8.13-12.7,8.15-28.75,0-4.84-.74-9.99-2.68-15.18-.23-.62-.92-.94-1.54-.7-.62,.23-.94,.92-.7,1.54Z"
      fill="#42210b"
    />
    <path
      d="M128.05,273.13l5.04-3.29,1.27,5.89c.14,.65,.78,1.06,1.43,.92,.65-.14,1.06-.78,.92-1.43l-1.64-7.59c-.08-.38-.35-.71-.72-.86s-.78-.11-1.11,.11l-6.5,4.25c-.55,.36-.71,1.11-.35,1.66,.36,.55,1.11,.71,1.66,.35Z"
      fill="#42210b"
    />
    <path
      d="M147.6,233.76c1.83,4.89,2.53,9.75,2.53,14.34,0,7.62-1.94,14.51-3.9,19.48-.98,2.49-1.95,4.5-2.68,5.87-.36,.69-.67,1.22-.88,1.58-.1,.18-.19,.31-.24,.4l-.06,.1-.02,.03c-.36,.56-.19,1.3,.37,1.66,.56,.36,1.3,.19,1.66-.37,.05-.1,8.13-12.71,8.15-28.75,0-4.84-.74-9.99-2.68-15.18-.23-.62-.92-.94-1.54-.7-.62,.23-.94,.92-.7,1.54Z"
      fill="#42210b"
    />
    <path
      d="M140.95,274.74l5.04-3.29,1.27,5.88c.14,.65,.78,1.06,1.43,.92,.65-.14,1.06-.78,.92-1.43l-1.64-7.59c-.08-.38-.35-.71-.72-.86-.36-.15-.78-.11-1.11,.11l-6.5,4.25c-.56,.36-.71,1.11-.35,1.66,.36,.55,1.11,.71,1.66,.35Z"
      fill="#42210b"
    />
    <path
      d="M101.13,193.87c4.03,10.78,18.38,24.91,46.15,17.37-10.68-4.81-15.64-15.79-16.83-22.77-.29-1.66-.03-3.83-.67-6.7-.87-3.91-3.98-6.54-6.94-5.88-2.17,.48-3.65,2.6-3.96,5.23-1.39-2.25-3.63-3.54-5.8-3.05-2.17,.48-3.66,2.6-3.96,5.23-1.39-2.25-3.63-3.54-5.8-3.05-2.97,.66-4.66,4.37-3.79,8.27,.5,2.23,1.61,5.36,1.61,5.36Z"
      fill="#470b7c"
    />
    <path
      d="M96.08,207.58c40.17,13.56,50.26-33.17,77.74-19.6,27.48,13.57,18.34,35.32,4.71,52.58-13.63,17.26-37.43,20.52-53.23,13.01-28.83-13.7-29.22-45.99-29.22-45.99Z"
      fill="#aa7ad3"
    />
    <path
      d="M192.88,207.04c-2.15-9.55-6.33-15.98-17.78-21.64-.21-.1-.41-.2-.61-.29-14.24-6.67-27.36-.06-36.55,7.97-6,5.24-10.36,13.82-23.77,14.87-13.41,1.05-26.6-18.49-31.74-15.41s12.19,16.7,12.19,16.7c0,0-16.09-10.11-18.65-5.79-2.56,4.31,14.04,13.58,14.04,13.58,0,0-18.96-7.51-20.5-2.67-1.46,4.59,18.92,11.58,25.71,12.53,6.8,.95,24.83,4.67,43.46-6.05,0,0-.84,7.61,1.91,8.9,2.01,.94,4.48,.18,6.33-1.72-.27,2.63,.72,5.02,2.73,5.96,2.01,.94,4.48,.18,6.33-1.72-.28,2.63,.72,5.02,2.73,5.96,2.01,.94,4.48,.18,6.33-1.72-.28,2.63,.72,5.02,2.73,5.96,2.01,.94,4.48,.18,6.33-1.72-.28,2.63,.72,5.02,2.73,5.96l.09-.11-.04,.15c1.37-1.35,2.69-2.82,3.93-4.39,1.63-2.07,3.09-4.15,4.4-6.24l.05-.07h0c6.37-10.21,9.66-20.03,7.64-29Z"
      fill="#662d91"
    />
    <path
      d="M108.33,187.01c1.01,11.47,11.08,28.91,39.85,29.05-9.01-7.48-10.87-19.39-10.15-26.44,.17-1.68,.99-3.7,1.14-6.63,.2-4-2.09-7.37-5.12-7.52-2.22-.11-4.21,1.53-5.21,3.98-.74-2.54-2.56-4.38-4.78-4.49-2.22-.11-4.22,1.53-5.21,3.98-.74-2.54-2.56-4.38-4.78-4.49-3.04-.15-5.66,2.96-5.86,6.96-.12,2.28,.12,5.59,.12,5.59Z"
      fill="#aa7ad3"
    />
    <path
      d="M189.23,201.07s-.91,5.73,2.88,8.49l8.45-7.6-11.33-.89Z"
      fill="#fbb03b"
    />
    <path
      d="M177.75,199.93c.82,2.05,.17,4.24-1.46,4.89-1.62,.65-3.6-.49-4.42-2.54-.82-2.05-.17-4.24,1.45-4.89,1.62-.65,3.6,.49,4.42,2.55Z"
      fill="#42210b"
    />
  </g>,
  // Top branch middle
  <g>
    <path
      d="M244.14,76.27l-7.6,41.04c-.12,.65,.31,1.28,.96,1.4,.65,.12,1.28-.31,1.4-.96l7.6-41.04c.12-.65-.31-1.28-.96-1.4-.65-.12-1.28,.31-1.4,.96"
      fill="#42210b"
    />
    <path
      d="M242.96,116.2l-3.23-6.08c-.19-.35-.54-.59-.93-.63-.4-.04-.79,.12-1.04,.42l-5.13,6.08c-.43,.51-.36,1.26,.14,1.69,.51,.43,1.26,.36,1.69-.14l3.99-4.72,2.4,4.51c.31,.59,1.04,.81,1.62,.5,.59-.31,.81-1.04,.5-1.62Z"
      fill="#42210b"
    />
    <path
      d="M231.03,76.27l-7.6,41.04c-.12,.65,.31,1.28,.96,1.4,.65,.12,1.28-.31,1.4-.96l7.6-41.04c.12-.65-.31-1.28-.96-1.4-.65-.12-1.28,.31-1.4,.96"
      fill="#42210b"
    />
    <path
      d="M229.85,116.2l-3.23-6.08c-.19-.35-.54-.59-.93-.63-.4-.04-.79,.12-1.04,.42l-5.13,6.08c-.43,.51-.36,1.26,.14,1.69,.51,.43,1.26,.36,1.69-.14l3.99-4.72,2.4,4.51c.31,.59,1.04,.81,1.62,.5,.59-.31,.81-1.04,.5-1.62Z"
      fill="#42210b"
    />
    <path
      d="M202.52,25.86c-34.86,19.64-17.56,44.73-.98,60.43,16.58,15.7,40.22,12.17,57.4,2.34,17.19-9.83,24.55-26.87,24.55-26.87-32.37,9.18-46.94-55.08-80.97-35.9Z"
      fill="#fabf78"
    />
    <path
      d="M284.41,54.6s4.75-7.85,2.99-9.66c-1.76-1.81-9.74,2.72-9.74,2.72,0,0,1.43-11.48-1.55-12-5.1-.9-9.58,16.41-10.41,19.82-5.34-3.81-10.3-9.66-15.39-15.68-11.83-13.98-28.53-27.93-49.14-16.32l-.43,.25c-13.51,7.72-18.56,15.81-19.88,26.83-1.45,12.09,5.92,25.54,18.79,37.72,.45,.43,.9,.84,1.36,1.24h0s.02,.02,.02,.02c3.19,2.78,6.57,4.92,10.07,6.51h0s0,0,0,0c1.1-1.22,1.48-3.1,1.11-5.07,1.9,1.66,4.3,2.21,6.14,1.15,1.83-1.05,2.59-3.39,2.12-5.86,1.89,1.65,4.29,2.19,6.12,1.14,1.83-1.05,2.59-3.39,2.12-5.86,1.89,1.65,4.29,2.19,6.12,1.14,1.83-1.05,2.59-3.39,2.12-5.86,1.89,1.65,4.29,2.19,6.12,1.14,2.16-1.23,2.82-4.25,1.76-7.18,0,0,20.1-.89,26.71-1.99,6.83-1.13,25.64-6.67,24.8-12.35-.44-2.99-11.96-1.88-11.96-1.88Z"
      fill="#f7941e"
    />
    <path
      d="M224.39,57.95c6.69-10.98,25.84-4.81,33.54-23.74,10.83,34.85-11.42,48.15-24.3,46.14-5.98-.94-15.92-11.41-9.24-22.4Z"
      fill="#f96c1e"
    />
    <path
      d="M185.88,66.5s5.2,1.8,5.82,6.22l-10.15,3.68,4.33-9.89Z"
      fill="#42210b"
    />
    <path
      d="M192.35,54.94c1.04,1.82,3.06,2.63,4.5,1.81,1.44-.82,1.76-2.97,.72-4.79-1.04-1.82-3.06-2.63-4.5-1.81-1.44,.82-1.76,2.97-.72,4.79Z"
      fill="#42210b"
    />
  </g>,
  // Bottom branch right
  <g>
    <path
      d="M619.9,205.71v43.2c0,.66,.54,1.2,1.2,1.2s1.2-.54,1.2-1.2v-43.2c0-.66-.54-1.2-1.2-1.2s-1.2,.54-1.2,1.2"
      fill="#42210b"
    />
    <path
      d="M626.49,247.43l-4.4-6.4c-.22-.32-.6-.52-.99-.52s-.77,.2-.99,.52l-4.4,6.4c-.37,.55-.24,1.29,.31,1.67,.55,.38,1.29,.24,1.67-.31l3.41-4.96,3.41,4.96c.38,.55,1.12,.68,1.67,.31,.55-.38,.68-1.12,.31-1.67Z"
      fill="#42210b"
    />
    <path
      d="M606.1,205.71v43.2c0,.66,.54,1.2,1.2,1.2s1.2-.54,1.2-1.2v-43.2c0-.66-.54-1.2-1.2-1.2s-1.2,.54-1.2,1.2"
      fill="#42210b"
    />
    <path
      d="M612.69,247.43l-4.4-6.4c-.22-.32-.59-.52-.99-.52s-.77,.2-.99,.52l-4.4,6.4c-.37,.55-.24,1.29,.31,1.67,.55,.38,1.29,.24,1.67-.31l3.41-4.96,3.41,4.96c.38,.55,1.12,.68,1.67,.31,.55-.38,.68-1.12,.31-1.67h0Z"
      fill="#42210b"
    />
    <path
      d="M615.13,141.59c-39.12-3.97-34.97,39.52-34.97,39.52,0,0-2.38,42.58,33.24,46.64,35.62,4.06,40.56-22.08,40.56-22.08-36.71-7.53,.28-60.11-38.83-64.08Z"
      fill="#45cbf4"
    />
    <path
      d="M577.28,181.08c-.03-1.77-3.09-21.06,8.69-33.16,6.12-6.28,14.28-9.47,24.26-9.47,1.67,0,3.42,.09,5.19,.27,22.53,2.29,24.92,20.66,24.38,36.88-.34,10.25-.25,16.67,2.56,20.86,3.74-1.91,21.3-14.27,26.12-8.21,4.82,6.06-16.49,12.47-16.49,12.47,0,0,18.33-5.02,19.53-.16,.97,3.92-10.86,7.32-15.52,8.5-.04,.11,18.49-.35,18.56,3.82,.06,3.65-12.4,6.71-26.74,4.4-14.34-2.31-21.27-10.48-21.27-10.48l-.11-.12c-1,1.31-2.37,2.12-3.89,2.12-2.22,0-4.13-1.74-5-4.24-.87,2.5-2.78,4.24-5,4.24s-4.13-1.74-5-4.24c-.87,2.5-2.78,4.24-5,4.24s-4.13-1.74-5-4.24c-.87,2.5-2.78,4.24-5,4.24s-4.13-1.74-5-4.24c-.87,2.5-2.49,4.24-4.71,4.24l-.56-1.16c-5.35-12.28-5.05-25.11-5-26.56Z"
      fill="#00aeef"
    />
    <path
      d="M615.46,198.88s-4-8,3-11,16.74,17.92,35.5,14.5c-22,26-46,11-46.5,4s8-7.5,8-7.5Z"
      fill="#0d6cba"
    />
    <path
      d="M578.5,166.01s2.7,5.13,0,8.96l-10.45-4.48,10.45-4.48Z"
      fill="#fbb03b"
    />
    <path
      d="M591.09,161c0,2.21,1.42,4,3.16,4s3.16-1.79,3.16-4-1.42-4-3.16-4-3.16,1.79-3.16,4Z"
      fill="#42210b"
    />
  </g>,
  // Bottom branch center
  <g>
    <path
      d="M490.25,206.09v43.2c0,.66,.54,1.2,1.2,1.2s1.2-.54,1.2-1.2v-43.2c0-.66-.54-1.2-1.2-1.2s-1.2,.54-1.2,1.2"
      fill="#42210b"
    />
    <path
      d="M488.04,249.17l3.41-4.96,3.41,4.96c.38,.55,1.12,.68,1.67,.31,.55-.38,.68-1.12,.31-1.67l-4.4-6.4c-.22-.32-.6-.52-.99-.52s-.77,.2-.99,.52l-4.4,6.4c-.37,.55-.24,1.29,.31,1.67,.55,.38,1.29,.24,1.67-.31Z"
      fill="#42210b"
    />
    <path
      d="M504.05,206.09v43.2c0,.66,.54,1.2,1.2,1.2s1.2-.54,1.2-1.2v-43.2c0-.66-.54-1.2-1.2-1.2s-1.2,.54-1.2,1.2"
      fill="#42210b"
    />
    <path
      d="M501.83,249.17l3.41-4.96,3.41,4.96c.38,.55,1.12,.68,1.67,.31,.55-.38,.68-1.12,.31-1.67l-4.4-6.4c-.22-.32-.6-.52-.99-.52s-.77,.2-.99,.52l-4.4,6.4c-.37,.55-.24,1.29,.31,1.67,.55,.38,1.29,.24,1.67-.31Z"
      fill="#42210b"
    />
    <path
      d="M497.42,141.97c39.12-3.97,34.97,39.52,34.97,39.52,0,0,2.38,42.58-33.24,46.64-35.62,4.06-40.56-22.08-40.56-22.08,36.71-7.53-.28-60.11,38.83-64.08Z"
      fill="#ef7098"
    />
    <path
      d="M535.27,181.46c.03-1.77,3.09-21.06-8.69-33.16-6.12-6.28-14.28-9.47-24.26-9.47-1.67,0-3.42,.09-5.19,.27-22.53,2.29-24.92,20.66-24.38,36.88,.34,10.25,.25,16.67-2.56,20.86-3.74-1.91-21.3-14.27-26.12-8.21-4.82,6.06,16.49,12.47,16.49,12.47,0,0-18.33-5.02-19.53-.16-.97,3.92,10.86,7.32,15.52,8.49,.04,.11-18.49-.35-18.56,3.82-.06,3.65,12.4,6.71,26.74,4.4,14.34-2.31,21.27-10.48,21.27-10.48l.11-.12c1,1.31,2.37,2.12,3.89,2.12,2.22,0,4.13-1.74,5-4.24,.87,2.5,2.78,4.24,5,4.24s4.13-1.74,5-4.24c.87,2.5,2.78,4.24,5,4.24s4.13-1.74,5-4.24c.87,2.5,2.78,4.24,5,4.24s4.13-1.74,5-4.24c.87,2.5,2.49,4.24,4.71,4.24l.56-1.15c5.35-12.28,5.05-25.11,5-26.56Z"
      fill="#d92554"
    />
    <path
      d="M497.09,199.27s4-8-3-11-16.74,17.92-35.5,14.5c22,26,46,11,46.5,4s-8-7.5-8-7.5Z"
      fill="#a50738"
    />
    <path
      d="M534.05,166.39s-2.7,5.13,0,8.96l10.45-4.48-10.45-4.48Z"
      fill="#fbb03b"
    />
    <ellipse cx="518.3" cy="161.38" rx="3.16" ry="4" fill="#42210b" />
  </g>,
  // Top branch left
  <g>
    <path
      d="M129.02,60.43s4-8-3-11-16.74,17.92-35.5,14.5c22,26,46,11,46.5,4s-8-7.5-8-7.5Z"
      fill="#a50738"
    />
    <path
      d="M80.18,67.26v43.2c0,.66,.54,1.2,1.2,1.2s1.2-.54,1.2-1.2v-43.2c0-.66-.54-1.2-1.2-1.2s-1.2,.54-1.2,1.2"
      fill="#42210b"
    />
    <path
      d="M77.97,110.34l3.41-4.96,3.41,4.96c.38,.55,1.12,.68,1.67,.31,.55-.38,.68-1.12,.31-1.67l-4.4-6.4c-.22-.32-.6-.52-.99-.52s-.77,.2-.99,.52l-4.4,6.4c-.38,.55-.24,1.29,.31,1.67,.55,.38,1.29,.24,1.67-.31Z"
      fill="#42210b"
    />
    <path
      d="M93.98,67.26v43.2c0,.66,.54,1.2,1.2,1.2s1.2-.54,1.2-1.2v-43.2c0-.66-.54-1.2-1.2-1.2s-1.2,.54-1.2,1.2"
      fill="#42210b"
    />
    <path
      d="M91.77,110.34l3.41-4.96,3.41,4.96c.38,.55,1.12,.68,1.67,.31,.55-.38,.68-1.12,.31-1.67l-4.4-6.4c-.22-.32-.6-.52-.99-.52s-.77,.2-.99,.52l-4.4,6.4c-.38,.55-.24,1.29,.31,1.67,.55,.38,1.29,.24,1.67-.31Z"
      fill="#42210b"
    />
    <path
      d="M91.36,3.14c39.12-3.97,30.97,39.52,30.97,39.52,0,0,2.38,42.58-33.24,46.64-35.62,4.06-40.56-22.08-40.56-22.08,36.71-7.53,3.72-60.11,42.84-64.08Z"
      fill="#ef7098"
    />
    <path
      d="M120.52,9.47C114.4,3.19,106.23,0,96.25,0c-1.67,0-3.42,.09-5.19,.27-22.53,2.29-28.92,20.66-28.38,36.88,.34,10.25,.25,16.67-2.56,20.86-3.74-1.91-21.3-14.27-26.12-8.21-4.82,6.06,16.49,12.47,16.49,12.47,0,0-18.33-5.02-19.53-.16-.97,3.92,10.86,7.32,15.52,8.5,.04,.11-18.49-.35-18.56,3.82-.06,3.65,12.4,6.71,26.74,4.4,14.34-2.31,21.27-10.48,21.27-10.48l.11-.12c1,1.31,2.37,2.12,3.89,2.12,2.22,0,4.13-1.74,5-4.24,.87,2.5,2.78,4.24,5,4.24s4.13-1.74,5-4.24c.87,2.5,2.78,4.24,5,4.24s4.13-1.74,5-4.24c.87,2.5,2.78,4.24,5,4.24s4.13-1.74,5-4.24c.87,2.5,2.49,4.24,4.71,4.24l.56-1.16c5.35-12.28,12.09-47.62,.31-59.72Z"
      fill="#d92554"
    />
    <path
      d="M87.02,60.43s4-8-3-11-16.74,17.92-35.5,14.5c22,26,46,11,46.5,4s-8-7.5-8-7.5Z"
      fill="#a50738"
    />
    <path
      d="M98.35,29.72s-5.13,2.69-5.09,7.38l11.14,2.24-6.05-9.62Z"
      fill="#fbb03b"
    />
    <path
      d="M90.4,22.55c0,2.21-1.42,4-3.16,4s-3.16-1.79-3.16-4,1.42-4,3.16-4,3.16,1.79,3.16,4Z"
      fill="#42210b"
    />
    <path
      d="M108.4,22.55c0,2.21-1.42,4-3.16,4s-3.16-1.79-3.16-4,1.42-4,3.16-4,3.16,1.79,3.16,4Z"
      fill="#42210b"
    />
  </g>,
];

const Birds = ({ guessCount, ...props }) => {
  const showCount = maxAttempts + 1 - guessCount;
  return (
    <svg viewBox="0 0 720 289.4" {...props}>
      {/* Tree branch */}
      <g>
        <path
          d="M0,87.49v19.02c228.26,57.07,422.28-22.82,422.28-22.82,0,0-182.61,64.67-422.28,3.8Z"
          fill="#754c24"
        />
        <path
          d="M316.73,108.27h11.41c-8.33-30.71,15.22-69.75,15.22-69.75,0,0-24.82,22.89-26.63,69.75Z"
          fill="#754c24"
        />
        <path
          d="M354.63,102.05l-8.55,5.04s8.11,21.44,30.63,34.37c-21.22-18.58-22.08-39.41-22.08-39.41Z"
          fill="#754c24"
        />
        <path
          d="M319.41,54.89c4.66,4.39,5.55,9.4,5.96,15.45-6.07-.05-11.11-.66-15.76-5.05-4.66-4.39-5.57-9.39-5.97-15.44,6.07,.04,11.12,.65,15.77,5.04Z"
          fill="#87c73b"
          fill-rule="evenodd"
        />
        <path
          d="M350.87,115.75c1.33,5.92,1.88,10.97-1.34,16.5-3.22,5.53-7.88,7.55-13.68,9.31-1.33-5.92-1.89-10.97,1.33-16.5,3.22-5.53,7.89-7.55,13.69-9.31Z"
          fill="#699e1e"
          fill-rule="evenodd"
        />
        <path
          d="M361.77,124.41c5.1-3.27,9.67-5.51,15.97-4.38,6.3,1.13,9.78,4.82,13.43,9.68-5.11,3.27-9.66,5.53-15.96,4.39-6.3-1.14-9.79-4.84-13.43-9.69Z"
          fill="#699e1e"
          fill-rule="evenodd"
        />
        <path
          d="M416.01,85.37c6.03-.62,11.11-.57,16.23,3.29,5.11,3.85,6.56,8.72,7.63,14.69-6.04,.62-11.12,.58-16.23-3.28-5.11-3.85-6.56-8.73-7.62-14.7Z"
          fill="#87c73b"
          fill-rule="evenodd"
        />
        <path
          d="M330.81,62.66c3.67-4.83,7.18-8.5,13.48-9.61,6.3-1.1,10.85,1.16,15.94,4.46-3.67,4.83-7.17,8.52-13.47,9.62-6.31,1.1-10.86-1.17-15.95-4.47Z"
          fill="#699e1e"
          fill-rule="evenodd"
        />
        <path
          d="M323.34,91.95c1.3-5.92,2.94-10.73,8.21-14.38,5.26-3.65,10.33-3.5,16.34-2.64-1.3,5.93-2.93,10.74-8.19,14.39-5.26,3.65-10.35,3.5-16.35,2.63Z"
          fill="#87c73b"
          fill-rule="evenodd"
        />
        <path
          d="M54.81,110.92l-9.93,.18s-3.51,22.66,9.73,45c-9.31-26.62,.2-45.18,.2-45.18Z"
          fill="#754c24"
        />
        <path
          d="M65.96,129.93c4.96,4.05,6.21,8.97,7.05,14.98-6.06,.39-11.13,.14-16.08-3.91-4.96-4.05-6.23-8.97-7.06-14.98,6.05-.39,11.13-.15,16.1,3.9Z"
          fill="#87c73b"
          fill-rule="evenodd"
        />
      </g>
      {/* Other tree branch */}
      <g>
        <path
          d="M720,220.79v19.02c-228.26,57.07-422.28-22.83-422.28-22.83,0,0,182.61,64.67,422.28,3.8Z"
          fill="#754c24"
        />
        <path
          d="M403.27,241.57h-11.41c8.33-30.71-15.22-69.75-15.22-69.75,0,0,24.82,22.89,26.63,69.75Z"
          fill="#754c24"
        />
        <path
          d="M365.37,235.35l8.56,5.05s-8.11,21.44-30.64,34.37c21.22-18.58,22.08-39.42,22.08-39.42Z"
          fill="#754c24"
        />
        <path
          d="M416.37,183.15c-.4,6.05-1.31,11.05-5.97,15.44-4.66,4.39-9.69,5-15.76,5.05,.4-6.05,1.3-11.05,5.96-15.45,4.66-4.39,9.71-5,15.78-5.04Z"
          fill="#87c73b"
          fill-rule="evenodd"
        />
        <path
          d="M344.8,267.39c-6.3,1.13-10.86-1.12-15.96-4.39,3.65-4.85,7.13-8.54,13.43-9.68,6.3-1.13,10.86,1.1,15.97,4.38-3.64,4.85-7.13,8.55-13.43,9.69Z"
          fill="#699e1e"
          fill-rule="evenodd"
        />
        <path
          d="M296.37,233.37c-5.11,3.85-10.19,3.9-16.23,3.28,1.07-5.97,2.52-10.84,7.63-14.69,5.11-3.85,10.19-3.91,16.23-3.29-1.06,5.97-2.51,10.85-7.62,14.7Z"
          fill="#87c73b"
          fill-rule="evenodd"
        />
        <path
          d="M380.31,222.62c-5.26-3.65-6.89-8.46-8.19-14.39,6.01-.86,11.08-1,16.34,2.64,5.26,3.65,6.91,8.46,8.21,14.38-6,.86-11.09,1.01-16.35-2.63Z"
          fill="#87c73b"
          fill-rule="evenodd"
        />
        <path
          d="M665.19,244.22l9.93,.17s3.51,22.66-9.73,45c9.31-26.62-.2-45.18-.2-45.18Z"
          fill="#754c24"
        />
        <path
          d="M670.14,259.33c-.83,6.01-2.1,10.93-7.06,14.98-4.96,4.05-10.03,4.29-16.08,3.91,.83-6.01,2.09-10.93,7.05-14.98,4.96-4.05,10.04-4.29,16.1-3.9Z"
          fill="#87c73b"
          fill-rule="evenodd"
        />
      </g>
      {birds.map((bird, index) => {
        return index + 1 > showCount ? null : bird;
      })}
    </svg>
  );
};

export default Birds;
