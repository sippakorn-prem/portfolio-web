import styles from './Logo.module.scss';
import anime, { AnimeInstance } from 'animejs';
import { ReactElement, useEffect, useRef } from 'react';

interface Props {
  fill: string;
}

export default function Logo(props: Props): ReactElement {
  const animationRef = useRef<AnimeInstance | null>(null);

  const pathProps = {
    stroke: props.fill,
    strokeWidth: 2,
    fill: 'none',
  };

  useEffect(() => {
    animationRef.current = anime({
      targets: `.${styles.logo} svg path`,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      delay: (el: HTMLElement, i: number) => i * 250,
      direction: 'forwards',
    });
  }, []);

  return (
    <div {...props} className={styles.logo}>
      <svg
        width="206"
        height="72"
        viewBox="0 0 206 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_30_38)">
          <path
            d="M32.1077 55.7236C31.5267 56.4209 30.9572 57.1066 30.3944 57.7909C31.4914 54.8074 32.3761 51.7509 33.0172 48.6523L33.018 48.6484C33.7865 44.8056 34.29 40.8999 33.6486 36.9022C32.9984 32.2891 30.7516 28.6682 26.934 26.003C26.9282 25.999 26.9224 25.9951 26.9165 25.9913C24.5019 24.4289 21.9361 23.2868 19.0814 22.6438C16.2624 21.9525 13.3992 21.3819 10.5415 20.8124C9.65241 20.6352 8.76388 20.4581 7.87737 20.2776C6.65827 20.0064 5.50524 19.6677 4.34954 19.2602C3.90408 19.08 3.82077 18.9214 3.8017 18.8555C3.77604 18.7669 3.77733 18.5542 4.0274 18.1135C4.38789 17.5369 4.67351 17.0979 5.04258 16.8343C5.05862 16.8229 5.0741 16.8106 5.08894 16.7976C6.76112 15.3345 8.40765 13.8944 10.118 12.6628C14.4747 9.55096 19.0105 6.80582 24.0101 5.02495C26.5641 4.12769 29.0309 3.47154 31.6038 3.73542L31.6212 3.73695C32.9502 3.83419 34.0025 4.23508 34.7713 4.88326C35.536 5.52803 36.0658 6.45563 36.2879 7.6934C36.2886 7.69696 36.2892 7.70051 36.2899 7.70405C36.2913 7.711 36.2928 7.71793 36.2944 7.72483C36.5611 8.85808 36.6865 10.164 36.4952 11.312C36.4938 11.32 36.4927 11.3281 36.4917 11.3362C36.2649 13.15 35.8507 15.0091 35.436 16.8699C35.3502 17.255 35.2643 17.6403 35.1801 18.0252L35.18 18.0252L35.1779 18.0358C35.1127 18.3619 35.0181 18.87 35.1002 19.3393C35.1172 19.5229 35.1948 19.6668 35.2573 19.7586C35.3297 19.865 35.4159 19.951 35.4825 20.0121C35.5461 20.0703 35.6127 20.1245 35.6607 20.1634L35.6703 20.1712C35.6969 20.1928 35.7168 20.209 35.7336 20.2234C35.7417 20.2303 35.7478 20.2356 35.7524 20.2398L35.7575 20.2444C35.7586 20.2455 35.7591 20.2461 35.7591 20.246C35.9613 20.4483 36.2782 20.4796 36.5162 20.321C36.5277 20.3133 36.5446 20.3025 36.5655 20.2893C36.6472 20.2374 36.7889 20.1474 36.8977 20.0568C37.0534 19.9269 37.2412 19.7237 37.3197 19.4185C37.4292 19.0161 37.5192 18.5826 37.6054 18.1604C37.6121 18.1278 37.6187 18.0952 37.6253 18.0627C37.7061 17.6663 37.7849 17.2797 37.8776 16.9087C38.576 14.1151 39.156 11.1767 38.7952 8.07421L38.7953 8.0742L38.7939 8.06347C38.5343 6.13503 37.7305 4.52421 36.4775 3.36687C35.2247 2.20973 33.5583 1.53859 31.63 1.42733L31.627 1.42718C28.8973 1.2835 26.3888 1.71603 23.8288 2.56935C18.963 4.19129 14.6035 6.65501 10.4075 9.52192C7.97104 11.1231 5.56375 12.8196 3.50129 14.9523C2.76471 15.6896 2.17092 16.5051 1.72421 17.3985L1.71797 17.4114C1.38921 18.11 1.30434 18.8229 1.51493 19.4898C1.7243 20.1528 2.2008 20.6916 2.84653 21.0952L2.84648 21.0953L2.85584 21.1009C3.60242 21.5488 4.49166 21.919 5.38246 22.1417C5.39085 22.1438 5.39928 22.1457 5.40775 22.1474C6.94294 22.4614 8.45981 22.7404 9.96994 23.0181L9.97258 23.0186C11.4854 23.2968 12.9915 23.5738 14.514 23.8852C17.553 24.5069 20.6237 25.3287 23.407 26.6863C27.3722 28.6355 30.0149 31.5595 31.0108 35.8752L31.0116 35.8786C31.6163 38.4316 31.6203 41.0001 31.3462 43.6731L31.346 43.6746C30.9354 47.7809 29.8388 51.8334 28.5248 55.7758C27.215 59.5667 25.6284 63.1546 23.8315 66.6792L23.8294 66.6834C23.7278 66.8868 23.5749 67.2112 23.5749 67.5513C23.5749 67.7419 23.622 67.9519 23.7562 68.1449C23.8768 68.3181 24.0411 68.4396 24.2193 68.5237C24.387 68.6261 24.5775 68.6929 24.7855 68.6954C25.0144 68.6983 25.209 68.6227 25.3611 68.5243C25.6354 68.3468 25.8169 68.0632 25.922 67.8882C28.191 64.1756 30.8772 60.7987 33.6527 57.468C37.7314 52.6983 42.2294 48.2688 46.8748 44.0394C49.0297 42.0897 51.2202 40.2181 53.428 38.3316C54.191 37.6798 54.956 37.0261 55.7223 36.3668L55.7253 36.3657C55.749 36.3563 55.8368 36.3216 55.9206 36.2571C55.9708 36.2185 56.037 36.1566 56.0905 36.0644C56.1275 36.0005 56.1533 35.9308 56.1668 35.858C56.1795 35.8098 56.1952 35.7563 56.214 35.6924L56.2155 35.6872C56.2362 35.617 56.2609 35.533 56.2813 35.4514C56.3016 35.37 56.324 35.2669 56.3322 35.1607C56.3392 35.069 56.344 34.8889 56.2532 34.7073C56.2066 34.6139 56.1363 34.5343 56.0494 34.4764C55.8646 34.3532 55.6459 34.2759 55.4448 34.2382C55.2775 34.2068 55.0662 34.1924 54.8584 34.2404C54.602 34.2612 54.394 34.3648 54.2368 34.4736C54.0793 34.5827 53.9424 34.7195 53.847 34.815C52.9573 35.5905 52.0556 36.3622 51.1516 37.136C49.3246 38.6999 47.4879 40.272 45.72 41.9002C40.9089 46.2234 36.303 50.829 32.1131 55.7172L32.1131 55.7172L32.1077 55.7236ZM31.5955 2.02635L31.5955 2.02616L31.5955 2.02635Z"
            {...pathProps}
          />
          <path
            d="M52.5875 36.9077C52.5592 36.9786 52.5446 37.0542 52.5446 37.1305V37.1326V37.1346V37.1366V37.1387V37.1407V37.1427V37.1447V37.1468V37.1488V37.1508V37.1528V37.1549V37.1569V37.1589V37.1609V37.1629V37.1649V37.1669V37.1689V37.1709V37.173V37.175V37.177V37.179V37.181V37.183V37.185V37.1869V37.1889V37.1909V37.1929V37.1949V37.1969V37.1989V37.2009V37.2029V37.2048V37.2068V37.2088V37.2108V37.2128V37.2147V37.2167V37.2187V37.2207V37.2226V37.2246V37.2266V37.2285V37.2305V37.2325V37.2344V37.2364V37.2383V37.2403V37.2423V37.2442V37.2462V37.2481V37.2501V37.252V37.254V37.2559V37.2579V37.2598V37.2618V37.2637V37.2657V37.2676V37.2695V37.2715V37.2734V37.2754V37.2773V37.2792V37.2812V37.2831V37.285V37.287V37.2889V37.2908V37.2927V37.2947V37.2966V37.2985V37.3004V37.3024V37.3043V37.3062V37.3081V37.31V37.312V37.3139V37.3158V37.3177V37.3196V37.3215V37.3234V37.3254V37.3273V37.3292V37.3311V37.333V37.3349V37.3368V37.3387V37.3406V37.3425V37.3444V37.3463V37.3482V37.3501V37.352V37.3539V37.3558V37.3577V37.3596V37.3615V37.3634V37.3652V37.3671V37.369V37.3709V37.3728V37.3747V37.3766V37.3785V37.3803V37.3822V37.3841V37.386V37.3879V37.3898V37.3916V37.3935V37.3954V37.3973V37.3991V37.401V37.4029V37.4048V37.4066V37.4085V37.4104V37.4123V37.4141V37.416V37.4179V37.4197V37.4216V37.4235V37.4253V37.4272V37.4291V37.4309V37.4328V37.4347V37.4365V37.4384V37.4402V37.4421V37.444V37.4458V37.4477V37.4495V37.4514V37.4533V37.4551V37.457V37.4588V37.4607V37.4625V37.4644V37.4663V37.4681V37.47V37.4718V37.4737V37.4755V37.4774V37.4792V37.4811V37.4829V37.4848V37.4866V37.4885V37.4903V37.4922V37.494V37.4959V37.4977V37.4995V37.5014V37.5032V37.5051V37.5069V37.5088V37.5106V37.5125V37.5143V37.5161V37.518V37.5198V37.5217V37.5235V37.5253V37.5272V37.529V37.5309V37.5327V37.5345V37.5364V37.5382V37.5401V37.5419V37.5437V37.5456V37.5474V37.5493V37.5511V37.5529V37.5548V37.5566V37.5584V37.5603V37.5621V37.5639V37.5658V37.5676V37.5694V37.5713V37.5731V37.575V37.5768V37.5786V37.5805V37.5823V37.5841V37.586V37.5878V37.5896V37.5915V37.5933V37.5951V37.597V37.5988V37.6006V37.6025V37.6043V37.6061V37.608V37.6098V37.6116V37.6135V37.6153V37.6171V37.619V37.6208V37.6226V37.6245V37.6263V37.6281V37.63V37.6318V37.6336V37.6355V37.6373V37.6391V37.641V37.6428V37.6446V37.6465V37.6483V37.6501V37.652V37.6538V37.6556V37.6575V37.6593V37.6611V37.663V37.6648V37.6666V37.6685V37.6703V37.6721V37.674V37.6758V37.6776V37.6795V37.6813V37.6832V37.685V37.6868V37.6887V37.6905V37.6923V37.6942V37.696V37.6979V37.6997V37.7015V37.7034V37.7052V37.7071V37.7089V37.7107V37.7126V37.7144V37.7163V37.7181V37.7199V37.7218V37.7236V37.7255V37.7273V37.7292V37.731V37.7329V37.7347V37.7365V37.7384V37.7402V37.7421V37.7439V37.7458V37.7476V37.7495V37.7513V37.7532V37.755V37.7569V37.7587V37.7606V37.7624V37.7643V37.7661V37.768V37.7698V37.7717V37.7736V37.7754V37.7773V37.7791V37.781V37.7828V37.7847V37.7866V37.7884V37.7903V37.7921V37.794V37.7959V37.7977V37.7996V37.8014V37.8033V37.8052V37.807V37.8089V37.8108V37.8126V37.8145V37.8164V37.8182V37.8201V37.822V37.8239V37.8257V37.8276V37.8295V37.8314V37.8332V37.8351V37.837V37.8389V37.8407V37.8426V37.8445V37.8464V37.8483V37.8501V37.852V37.8539V37.8558V37.8577V37.8596V37.8614V37.8633V37.8652V37.8671V37.869V37.8709V37.8728V37.8747V37.8766V37.8785V37.8804V37.8823V37.8841V37.886V37.8879V37.8898V37.8917V37.8936V37.8955V37.8975V37.8994V37.9013V37.9032V37.9051V37.907V37.9089V37.9108V37.9127V37.9146V37.9165V37.9185V37.9204V37.9223V37.9242V37.9261V37.928V37.93V37.9319V37.9338V37.9357V37.9376V37.9396V37.9415V37.9434V37.9454V37.9473V37.9492V37.9511V37.9531V37.955V37.9569V37.9589V37.9608V37.9628V37.9647V37.9666V37.9686V37.9705V37.9725V37.9744V37.9764V37.9783V37.9803V37.9822V37.9842V37.9861V37.9881V37.99V37.992V37.9939V37.9959V37.9979V37.9998V38.0018V38.0037V38.0057V38.0077V38.0096V38.0116V38.0136V38.0156V38.0175V38.0195V38.0215V38.0235V38.0254V38.0274V38.0294V38.0314V38.0334V38.0354V38.0373V38.0393V38.0413V38.0433V38.0453V38.0473V38.0493V38.0513V38.0533V38.0553V38.0573V38.0593V38.0613V38.0633V38.0653V38.0673V38.0693V38.0713V38.0733V38.0754V38.0774V38.0794V38.0814V38.0834V38.0855V38.0875V38.0895V38.0915V38.0936V38.0956V38.0976V38.0996V38.1017V38.1037C52.5446 38.1644 52.5538 38.2248 52.5719 38.2827C52.7828 38.9574 53.1592 39.4659 53.6878 39.7949C54.2046 40.1164 54.8129 40.233 55.4385 40.233C56.1701 40.233 56.9743 40.1602 57.7111 40.0128C57.7243 40.0102 57.7375 40.0071 57.7505 40.0036C61.8305 38.8971 65.9119 37.7903 69.9252 36.6834C70.1243 36.6651 70.2808 36.594 70.3885 36.5341C70.4408 36.5051 70.4899 36.4737 70.521 36.4539C70.5246 36.4516 70.528 36.4494 70.5311 36.4474C70.5485 36.4364 70.56 36.4292 70.5696 36.4234C70.5707 36.4228 70.5717 36.4222 70.5727 36.4216C70.8628 36.2958 71.1082 36.0679 71.2237 35.7598C71.3445 35.4377 71.301 35.081 71.0957 34.7868C70.9865 34.6122 70.8265 34.5234 70.7431 34.4834C70.6308 34.4296 70.5123 34.3968 70.4076 34.3772C70.221 34.3422 69.9615 34.3279 69.7288 34.3996C67.7838 34.9207 65.8567 35.4589 63.933 35.9961L63.9315 35.9965C62.0021 36.5354 60.0762 37.0732 58.1335 37.5936C57.1635 37.8522 56.18 37.9208 55.091 37.9208C54.8818 37.9208 54.8309 37.8527 54.8246 37.8438C54.8145 37.8296 54.7628 37.7405 54.8315 37.5115C55.0148 36.9005 55.3161 36.2236 55.5873 35.6141C55.6048 35.5749 55.6221 35.536 55.6392 35.4974C55.6423 35.4905 55.6452 35.4835 55.648 35.4765C55.6545 35.4605 55.6619 35.4423 55.6702 35.4223C55.7262 35.2863 55.8168 35.0661 55.8427 34.8589C55.8602 34.7192 55.8563 34.5478 55.7863 34.3696C55.7164 34.1916 55.5983 34.0519 55.4589 33.9455C55.1814 33.726 54.8397 33.6075 54.4762 33.6984C54.1646 33.7763 53.9454 33.9833 53.8025 34.165C53.5986 34.3793 53.4963 34.5991 53.4154 34.838L52.5875 36.9077ZM56.4271 29.5852C56.399 29.5812 56.3706 29.5792 56.3422 29.5792C56.1737 29.5792 55.8726 29.5964 55.5962 29.7518C55.4479 29.8352 55.3026 29.9609 55.1975 30.1422C55.0927 30.323 55.0471 30.526 55.0471 30.7353C55.0471 31.1397 55.2023 31.4892 55.5095 31.7144C55.7842 31.9159 56.1042 31.9609 56.3422 31.9609C56.5382 31.9609 56.846 31.9449 57.1319 31.802C57.4623 31.6368 57.7074 31.3301 57.7703 30.8897C57.7744 30.8616 57.7764 30.8332 57.7764 30.8048C57.7764 30.6128 57.7421 30.4149 57.6449 30.2312C57.5451 30.0423 57.4006 29.9094 57.246 29.8184C56.9844 29.6646 56.6599 29.6184 56.4453 29.5878C56.4391 29.5869 56.433 29.5861 56.4271 29.5852Z"
            {...pathProps}
          />
          <path
            d="M68.3414 60.4151C70.1417 51.8336 72.8363 43.5844 76.852 35.7845C76.9437 36.241 77.0461 36.7039 77.1754 37.1563C77.1793 37.1699 77.1836 37.1833 77.1884 37.1966C77.5037 38.0634 78.0231 38.7435 78.758 39.1166C79.4931 39.4898 80.3532 39.5099 81.2587 39.2353C81.5259 39.1587 81.7712 39.0644 81.99 38.9802L81.9995 38.9765C82.2287 38.8884 82.4304 38.8112 82.644 38.7501C82.6544 38.7472 82.6646 38.744 82.6748 38.7405C83.6776 38.3947 84.6812 38.0659 85.6898 37.7355L85.6919 37.7348C86.6975 37.4054 87.7082 37.0743 88.7196 36.7256C88.9862 36.6357 89.1964 36.4249 89.3202 36.2674C89.3912 36.1769 89.4587 36.0727 89.5107 35.9609C89.5592 35.8567 89.6135 35.7054 89.6135 35.5317C89.6135 35.34 89.5328 35.1805 89.4979 35.1147C89.4497 35.024 89.3904 34.9368 89.3326 34.8618C89.2741 34.7857 89.2077 34.7097 89.1393 34.6429C89.081 34.586 88.9841 34.4987 88.8647 34.439C88.8255 34.4194 88.7844 34.4042 88.7419 34.3935C88.3152 34.2869 87.9073 34.3898 87.6537 34.4537C87.641 34.457 87.6286 34.4601 87.6167 34.4631L87.6167 34.4629L87.6044 34.4663C86.8159 34.6813 86.0318 34.9664 85.2753 35.2415L85.2672 35.2445C84.4617 35.5247 83.6748 35.822 82.8964 36.116L82.8928 36.1174C82.1132 36.412 81.342 36.7032 80.5551 36.9772C80.1892 37.0881 79.9942 37.0563 79.8847 37.0047C79.7751 36.9532 79.6328 36.8263 79.4919 36.4924C79.3065 35.9948 79.179 35.4263 79.1141 34.9152C79.0811 34.4815 79.0643 34.0458 79.047 33.5971L79.0468 33.5915C79.0298 33.1495 79.0123 32.6945 78.9776 32.2377C78.9715 31.9735 78.8772 31.7219 78.7621 31.5301C78.6526 31.3477 78.4525 31.1009 78.1506 31.0003C78.136 30.9954 78.1213 30.9911 78.1064 30.9874C77.8232 30.9166 77.5435 30.9589 77.318 31.0384C77.1075 31.1127 76.9066 31.2323 76.7428 31.3844C76.5662 31.5162 76.4271 31.6939 76.3281 31.8378C76.214 32.0039 76.1148 32.1827 76.0383 32.3352C74.1599 35.814 72.3371 39.3879 70.9324 43.2506C70.7265 43.8122 70.5206 44.3788 70.3148 44.949C70.6218 42.4681 70.9188 39.9931 71.1872 37.4894C71.2988 36.8058 71.2835 36.0637 71.2701 35.4113C71.2659 35.2097 71.262 35.0167 71.262 34.8366C71.262 34.4606 71.1034 34.1086 70.8195 33.8815C70.5326 33.6519 70.1385 33.5718 69.7588 33.7176C69.4671 33.8219 69.2729 34.0624 69.1656 34.2411C69.0533 34.4283 68.9607 34.6724 68.9507 34.9295C68.8804 35.473 68.8628 36.028 68.846 36.5571L68.8458 36.5641C68.8282 37.1161 68.8113 37.6442 68.7459 38.168C68.329 41.4682 67.8947 44.7859 67.4603 48.1053L67.4602 48.1059C67.026 51.4231 66.5916 54.7419 66.1745 58.0435L65.7582 60.9583C65.7541 60.9864 65.7521 61.0147 65.7521 61.0431C65.7521 61.2384 65.768 61.5292 65.9024 61.798C66.0591 62.1115 66.3452 62.3338 66.7401 62.3996C67.117 62.4624 67.4541 62.3659 67.7158 62.1417C67.9476 61.943 68.0787 61.6789 68.1605 61.4745C68.1741 61.4405 68.1845 61.4053 68.1917 61.3693C68.2015 61.3206 68.212 61.2703 68.2227 61.2188C68.2748 60.9697 68.3329 60.6914 68.3414 60.4151Z"
            {...pathProps}
          />
          <path
            d="M86.2063 60.4151C88.0066 51.8336 90.7012 43.5844 94.7169 35.7845C94.8086 36.241 94.9111 36.7039 95.0403 37.1563C95.0442 37.1699 95.0486 37.1833 95.0534 37.1966C95.3686 38.0634 95.888 38.7435 96.6229 39.1166C97.358 39.4898 98.2181 39.5099 99.1237 39.2353C99.3908 39.1587 99.6361 39.0644 99.8549 38.9802L99.8644 38.9765C100.094 38.8884 100.295 38.8112 100.509 38.7501C100.519 38.7472 100.53 38.744 100.54 38.7405C101.543 38.3947 102.546 38.0659 103.555 37.7355L103.557 37.7348C104.562 37.4054 105.573 37.0743 106.584 36.7256C106.851 36.6357 107.061 36.4249 107.185 36.2674C107.256 36.1769 107.324 36.0727 107.376 35.9609C107.424 35.8567 107.478 35.7054 107.478 35.5317C107.478 35.34 107.398 35.1805 107.363 35.1147C107.315 35.024 107.255 34.9368 107.198 34.8618C107.139 34.7857 107.073 34.7097 107.004 34.6429C106.946 34.586 106.849 34.4987 106.73 34.439C106.69 34.4194 106.649 34.4042 106.607 34.3935C106.18 34.2869 105.772 34.3898 105.519 34.4537C105.506 34.457 105.494 34.4601 105.482 34.4631L105.482 34.4629L105.469 34.4663C104.681 34.6813 103.897 34.9664 103.14 35.2415L103.132 35.2445C102.327 35.5247 101.54 35.822 100.761 36.116L100.758 36.1174C99.9781 36.412 99.2069 36.7032 98.42 36.9772C98.0541 37.0881 97.8591 37.0563 97.7496 37.0047C97.64 36.9532 97.4977 36.8263 97.3569 36.4924C97.1715 35.9948 97.0439 35.4263 96.979 34.9152C96.946 34.4815 96.9292 34.0458 96.9119 33.5971L96.9117 33.5915C96.8947 33.1495 96.8772 32.6945 96.8426 32.2376C96.8365 31.9735 96.7421 31.7219 96.627 31.5301C96.5175 31.3477 96.3175 31.1009 96.0155 31.0003C96.0009 30.9954 95.9862 30.9911 95.9713 30.9874C95.6881 30.9166 95.4084 30.9589 95.1829 31.0384C94.9724 31.1127 94.7715 31.2323 94.6077 31.3844C94.4311 31.5162 94.292 31.6939 94.1931 31.8378C94.0789 32.0039 93.9798 32.1827 93.9032 32.3352C92.0248 35.814 90.2021 39.3878 88.7974 43.2505C88.5915 43.8121 88.3856 44.3788 88.1797 44.949C88.4867 42.4681 88.7837 39.9931 89.0521 37.4894C89.1637 36.8058 89.1484 36.0636 89.135 35.4112C89.1309 35.2097 89.1269 35.0167 89.1269 34.8366C89.1269 34.4606 88.9683 34.1086 88.6845 33.8815C88.3976 33.6519 88.0034 33.5718 87.6238 33.7176C87.332 33.8219 87.1378 34.0624 87.0305 34.2411C86.9182 34.4283 86.8256 34.6724 86.8156 34.9295C86.7453 35.473 86.7277 36.028 86.7109 36.5571L86.7107 36.5641C86.6932 37.1161 86.6763 37.6442 86.6108 38.168C86.1939 41.4682 85.7597 44.7859 85.3252 48.1053L85.3251 48.1061C84.8909 51.4232 84.4565 54.7419 84.0395 58.0435L83.6231 60.9583C83.6191 60.9864 83.617 61.0147 83.617 61.0431C83.617 61.2384 83.6329 61.5292 83.7673 61.798C83.924 62.1115 84.2101 62.3338 84.605 62.3996C84.9819 62.4624 85.319 62.3659 85.5807 62.1417C85.8125 61.943 85.9436 61.6789 86.0254 61.4745C86.039 61.4405 86.0495 61.4053 86.0566 61.3693C86.0664 61.3206 86.0769 61.2703 86.0877 61.2188C86.1397 60.9697 86.1979 60.6914 86.2063 60.4151Z"
            {...pathProps}
          />
          <path
            d="M110.116 35.9078C109.874 35.7035 109.635 35.5273 109.386 35.3976C109.411 35.3313 109.425 35.2593 109.425 35.1841C109.425 35.1301 109.435 35.0721 109.456 34.9607C109.462 34.9275 109.469 34.8894 109.476 34.8453C109.49 34.7665 109.507 34.6642 109.512 34.5587C109.517 34.4557 109.514 34.3115 109.463 34.1602C109.455 34.1333 109.444 34.1071 109.431 34.0817C108.985 33.1904 107.893 32.9075 106.996 33.4816C105.758 34.1101 104.924 35.1149 104.333 36.2225L104.326 36.2366C104.101 36.6853 103.795 37.5882 104.491 38.3029C104.807 38.6626 105.199 38.832 105.623 38.8162C106 38.8023 106.342 38.6431 106.605 38.4941C107.166 38.213 107.659 37.9316 108.212 37.5866C108.327 37.5325 108.37 37.5387 108.388 37.5414C108.429 37.5475 108.513 37.5746 108.7 37.6993L109.008 37.2384L108.7 37.6993C109.33 38.1187 110.114 38.6005 111.011 38.7635C111.019 38.7649 111.026 38.7661 111.034 38.7672C112.058 38.9135 113.107 38.9176 114.1 38.6893C115.984 38.2816 117.874 37.7986 119.724 37.3258C120.409 37.1507 121.089 36.9769 121.761 36.8089C121.776 36.8052 121.79 36.8009 121.805 36.7961L121.814 36.7931C121.912 36.7605 122.03 36.721 122.133 36.6797C122.188 36.658 122.249 36.6315 122.308 36.5999C122.361 36.5719 122.447 36.5216 122.526 36.4426C122.572 36.397 122.61 36.3443 122.638 36.2866C122.665 36.2332 122.697 36.1762 122.736 36.1085C122.741 36.0985 122.747 36.0881 122.754 36.0773C122.786 36.0208 122.823 35.9554 122.857 35.8923C122.924 35.7661 123.049 35.5241 123.049 35.2537C123.049 35.1773 123.035 35.1017 123.006 35.0308C122.936 34.8537 122.823 34.6965 122.664 34.5802C122.508 34.4658 122.34 34.4159 122.194 34.3976C121.932 34.3649 121.674 34.4292 121.545 34.4616L121.539 34.463L121.536 34.4639C120.55 34.7168 119.58 34.9766 118.617 35.2348C116.91 35.6926 115.222 36.1451 113.495 36.5439C112.191 36.8033 111.031 36.7084 110.124 35.9143L110.124 35.9143L110.116 35.9078Z"
            {...pathProps}
          />
          <path
            d="M124.882 40.132C124.933 40.0314 124.984 39.9308 125.035 39.83C125.249 40.0904 125.499 40.3023 125.782 40.4655C126.366 40.8025 127.031 40.8968 127.698 40.8576L127.713 40.8565C128.543 40.7874 129.348 40.7153 130.231 40.4957C133.767 39.7411 137.165 38.5077 140.53 37.2859C141.243 37.0272 141.954 36.7691 142.665 36.5161L142.673 36.5132C142.767 36.482 142.907 36.4354 143.033 36.3725C143.152 36.313 143.348 36.1967 143.473 35.9765C143.594 35.7827 143.644 35.5817 143.673 35.4489C143.689 35.3731 143.699 35.3222 143.706 35.284C143.716 35.2306 143.721 35.202 143.734 35.1653C143.838 34.851 143.668 34.5112 143.354 34.4064C143.338 34.4009 143.316 34.3933 143.29 34.3844C143.201 34.3534 143.065 34.306 142.945 34.2742C142.864 34.2525 142.761 34.2294 142.654 34.221C142.57 34.2144 142.412 34.2101 142.247 34.2788C141.806 34.4362 141.366 34.5943 140.926 34.7522C137.475 35.9918 134.047 37.2231 130.511 38.0765L130.497 38.08C129.507 38.3442 128.437 38.4794 127.347 38.5476L127.347 38.5475L127.339 38.5482C127.018 38.5728 126.899 38.4835 126.85 38.4257C126.785 38.3507 126.707 38.1758 126.73 37.8268C126.737 37.7823 126.745 37.7379 126.752 37.6937C126.814 37.317 126.873 36.957 126.974 36.6449C127.076 36.4012 127.176 36.1557 127.276 35.9087C127.525 35.2964 127.778 34.6744 128.069 34.0453C128.073 34.0359 128.077 34.0263 128.081 34.0167C128.154 33.8344 128.26 33.5396 128.224 33.2236C128.182 32.839 127.95 32.5365 127.584 32.3535L127.315 32.8902L127.584 32.3535C127.414 32.2686 127.228 32.2148 127.03 32.2175C126.829 32.2202 126.654 32.2811 126.511 32.367C126.276 32.508 126.108 32.7339 126.019 32.8544C126.012 32.8627 126.007 32.8705 126.001 32.8778C125.98 32.9065 125.961 32.9372 125.944 32.9694C125.8 33.2584 125.679 33.4988 125.565 33.6696C125.551 33.6903 125.539 33.7118 125.527 33.7341C124.945 34.8981 124.363 36.0432 123.781 37.1798C123.833 36.8907 123.886 36.6017 123.938 36.3127C124.454 33.4686 124.97 30.6298 125.607 27.8092C126.647 23.2292 127.805 18.6515 128.964 14.0655C129.351 12.535 129.739 11.0035 130.122 9.47071C130.124 9.46147 130.126 9.45219 130.128 9.44285L130.441 7.8788L130.754 6.31475C130.755 6.30843 130.756 6.30209 130.757 6.29572C130.817 5.93411 130.732 5.55562 130.512 5.26782C130.28 4.96532 129.894 4.76507 129.441 4.8406C129.41 4.84576 129.38 4.85332 129.35 4.86323C129.105 4.94486 128.883 5.13471 128.736 5.29242C128.584 5.45522 128.402 5.70063 128.332 5.98205L128.914 6.12757L128.332 5.98206C128.221 6.42612 128.148 6.90087 128.08 7.34282L128.078 7.35709C128.007 7.81441 127.942 8.23758 127.846 8.62265C127.654 9.38082 127.461 10.1388 127.269 10.8968C124.816 20.5536 122.366 30.2039 120.814 40.0961L120.814 40.0965C120.515 42.0064 120.166 43.8644 119.807 45.7707C119.751 46.0679 119.694 46.3662 119.638 46.666C119.553 47.021 119.55 47.4117 119.735 47.7446C119.943 48.1187 120.318 48.2965 120.712 48.2965C120.745 48.2965 120.778 48.2938 120.81 48.2884C121.154 48.231 121.421 48.0749 121.619 47.8437C121.795 47.6383 121.895 47.3958 121.964 47.2242C121.975 47.197 121.984 47.1689 121.99 47.1404C122.575 44.6839 123.717 42.4311 124.882 40.132Z"
            {...pathProps}
          />
          <path
            d="M145.664 35.385C145.427 35.0444 145.073 34.8865 144.733 34.8579C144.758 34.7797 144.779 34.6975 144.795 34.6117C144.838 34.4275 144.862 34.2181 144.849 34.0172C144.838 33.8374 144.79 33.5289 144.562 33.3002C144.428 33.1665 144.27 33.1028 144.16 33.0702C144.042 33.035 143.923 33.0187 143.816 33.0125C143.613 33.0006 143.377 33.021 143.183 33.0857L143.183 33.0857C142.688 33.2507 142.257 33.5049 141.906 33.8563C141.781 33.981 141.641 34.1414 141.529 34.3281C141.419 34.5116 141.313 34.7586 141.313 35.0452C141.313 35.3291 141.484 35.5121 141.546 35.5748C141.617 35.6453 141.697 35.704 141.754 35.7438C141.731 35.8071 141.708 35.8709 141.684 35.9353C141.396 36.7198 141.08 37.5817 140.853 38.4816C140.631 39.083 140.479 39.7683 140.479 40.4672C140.479 41.1837 140.736 41.8532 141.332 42.1889C141.925 42.5238 142.633 42.4015 143.259 42.0277C143.809 41.7124 144.348 41.2494 144.737 40.7818C144.753 40.7629 144.768 40.7429 144.781 40.7222C145.291 39.9293 145.714 39.1312 146.105 38.3937C146.151 38.3064 146.197 38.2199 146.242 38.1344C146.563 38.1242 146.892 38.1182 147.228 38.112C148.406 38.0904 149.655 38.0675 150.844 37.8607C150.851 37.8596 150.857 37.8583 150.864 37.857C151.415 37.7421 151.879 37.6462 152.285 37.5623C154.321 37.1416 154.895 37.0232 157.637 36.338C157.943 36.3212 158.28 36.2099 158.534 35.956C158.58 35.9104 158.617 35.8578 158.646 35.8001L158.65 35.7928C158.684 35.7252 158.752 35.5889 158.801 35.4434C158.826 35.3674 158.854 35.2669 158.864 35.156C158.873 35.051 158.872 34.8812 158.785 34.7073L158.271 34.9644L158.785 34.7073C158.686 34.5091 158.522 34.3633 158.366 34.27C158.234 34.1907 158.07 34.1257 157.886 34.1047C157.693 34.0489 157.514 34.0698 157.403 34.0899C157.267 34.1146 157.13 34.16 157.036 34.1914C156.811 34.2495 156.585 34.3082 156.358 34.3671C154.406 34.874 152.39 35.3975 150.376 35.7028C150.176 35.7314 150.013 35.7555 149.874 35.7761C149.488 35.8332 149.289 35.8626 149.024 35.8802C148.659 35.9046 148.181 35.905 146.988 35.905C146.446 35.905 145.984 35.7864 145.664 35.385ZM143.777 37.2385C143.838 37.286 143.903 37.3298 143.972 37.3695C143.974 37.3711 143.977 37.3726 143.979 37.374C143.979 37.3763 143.978 37.3787 143.978 37.3811C143.754 38.0451 143.473 38.6075 143.092 39.1194C143.308 38.4993 143.539 37.877 143.777 37.2385Z"
            {...pathProps}
          />
          <path
            d="M158.745 37.1996C158.591 37.4504 158.438 37.7011 158.285 37.951C158.289 37.8542 158.292 37.7574 158.292 37.6609C158.306 37.5666 158.319 37.4726 158.333 37.3789C158.455 36.5289 158.575 35.6972 158.639 34.8099C158.64 34.7956 158.64 34.7814 158.64 34.7671C158.64 34.5749 158.625 34.2903 158.506 34.0355C158.442 33.8981 158.338 33.7495 158.174 33.637C158.006 33.5217 157.815 33.472 157.623 33.472C156.911 33.472 156.484 34.0452 156.467 34.5945C156.385 35.4698 156.277 36.361 156.169 37.2549C156.012 38.5528 155.855 39.8561 155.773 41.1237C155.772 41.1366 155.772 41.1494 155.772 41.1623C155.772 41.3558 155.744 41.5566 155.708 41.8074L155.706 41.824C155.673 42.0566 155.633 42.3358 155.633 42.6221C155.633 42.9316 155.774 43.2057 155.876 43.3637C155.933 43.4518 155.998 43.5366 156.066 43.607C156.099 43.641 156.145 43.6837 156.2 43.7227C156.201 43.7232 156.201 43.7237 156.202 43.7243C156.225 43.7402 156.31 43.8007 156.436 43.8306C156.763 43.92 157.07 43.7964 157.236 43.7076C157.418 43.6107 157.604 43.4641 157.738 43.2851C157.946 43.0645 158.107 42.7857 158.248 42.5425C158.282 42.4841 158.314 42.4277 158.346 42.3747C158.357 42.3572 158.366 42.3392 158.375 42.3207C159.41 40.1133 160.572 37.9277 162.069 35.8866C162.074 35.8793 162.08 35.872 162.085 35.8646C162.203 35.6864 162.341 35.5169 162.493 35.3401C162.534 35.2921 162.577 35.2419 162.622 35.1903C162.677 35.1274 162.734 35.0624 162.789 34.9969C162.955 35.2706 163.131 35.5542 163.311 35.7975C164.044 37.0001 165.21 37.6673 166.676 37.5915C167.669 37.5908 168.725 37.52 169.692 37.451C169.707 37.4499 169.723 37.4482 169.738 37.4459C171.157 37.233 172.57 36.8796 173.951 36.5345L173.952 36.5342C174.152 36.493 174.431 36.4116 174.644 36.1993C174.904 35.9386 174.957 35.599 174.897 35.2848C174.869 35.1227 174.813 34.9536 174.705 34.8031C174.589 34.6413 174.435 34.5321 174.265 34.4714C173.969 34.3659 173.66 34.4234 173.493 34.4568C173.469 34.4617 173.445 34.4681 173.421 34.476C173.369 34.4935 173.31 34.5044 173.2 34.5228L173.188 34.5249C173.096 34.5401 172.963 34.5622 172.823 34.6062C170.832 35.0861 168.817 35.485 166.751 35.4879C166.334 35.456 166.016 35.3677 165.763 35.2257C165.511 35.0843 165.289 34.8706 165.093 34.5343C165.087 34.5239 165.08 34.5138 165.074 34.5038C164.971 34.3492 164.891 34.2083 164.803 34.0542C164.785 34.0224 164.767 33.99 164.748 33.9568C164.64 33.7686 164.517 33.5614 164.348 33.3496C164.341 33.3415 164.335 33.3335 164.328 33.3258C163.978 32.9322 163.526 32.6498 162.999 32.6213C162.474 32.5929 161.994 32.823 161.598 33.2107C161.166 33.5733 160.632 34.102 160.306 34.6672C159.785 35.5006 159.265 36.3509 158.746 37.1983L158.745 37.1996Z"
            {...pathProps}
          />
          <path
            d="M176.367 36.0562C175.86 36.3521 175.352 36.6224 174.824 36.8841C174.927 36.4375 175.045 35.9848 175.163 35.5506C175.167 35.5373 175.17 35.5239 175.173 35.5104C175.219 35.2781 175.238 34.9639 175.108 34.6657C174.966 34.342 174.687 34.1253 174.328 34.048C174.172 33.9957 174.004 33.9758 173.831 34.005C173.636 34.038 173.477 34.1268 173.354 34.2309C173.126 34.4239 172.994 34.6934 172.915 34.8919C172.899 34.9319 172.887 34.9735 172.88 35.0161C172.746 35.8196 172.545 36.6274 172.336 37.4625C172.169 38.0536 172.139 38.8007 172.77 39.4317C172.798 39.4597 172.828 39.4848 172.861 39.5067C173.568 39.9781 174.265 39.6975 174.698 39.4826C175.689 39.0565 176.608 38.5619 177.5 38.0815L177.502 38.0803C178.896 37.3854 180.186 37.2693 181.617 37.7668L181.617 37.7669L181.624 37.7693C182.037 37.9069 182.433 38.0447 182.833 38.1839L182.835 38.1845C183.233 38.3232 183.636 38.4632 184.057 38.6035L184.074 38.609C187.629 39.6753 191.235 39.9743 194.93 38.7435C197.081 38.0496 199.302 37.3556 201.526 36.6606C201.541 36.656 201.555 36.6508 201.57 36.645C201.583 36.6397 201.598 36.6339 201.615 36.6273C201.76 36.5707 202.033 36.465 202.235 36.2893C202.366 36.1764 202.492 36.017 202.557 35.8002C202.621 35.5874 202.609 35.3716 202.552 35.1681C202.495 34.9446 202.384 34.7291 202.19 34.5704C201.992 34.4089 201.771 34.3588 201.593 34.3503C201.423 34.3422 201.264 34.3707 201.153 34.3943C201.1 34.4056 201.049 34.4181 201.006 34.4283L200.995 34.431C200.962 34.439 200.935 34.4453 200.912 34.4505C200.894 34.4527 200.878 34.4552 200.864 34.4576C200.831 34.4636 200.801 34.471 200.778 34.4772C200.738 34.4882 200.698 34.5016 200.675 34.5094L200.671 34.5108C200.658 34.5148 200.65 34.5177 200.643 34.5198C200.607 34.5246 200.571 34.5326 200.537 34.5439C199.143 34.9947 197.758 35.4186 196.354 35.8484C195.378 36.1472 194.393 36.4488 193.389 36.7644C191.531 37.2942 189.551 37.4237 187.647 37.0321C186.71 36.7975 185.824 36.5494 184.938 36.3012C184.235 36.1041 183.532 35.907 182.803 35.7167L182.793 35.7142C182.037 35.5079 181.251 35.2937 180.461 35.15C180.446 35.1473 180.432 35.1452 180.417 35.1436C178.928 34.9869 177.622 35.4631 176.414 36.0316C176.398 36.0391 176.383 36.0473 176.367 36.0562Z"
            {...pathProps}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_30_38"
            x="0.79982"
            y="0.800049"
            width="204.8"
            height="70.8955"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1.2" dy="1.2" />
            <feGaussianBlur stdDeviation="0.6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_30_38" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_30_38"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
