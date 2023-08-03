"use client"
// Environment
import React, {useState, useEffect} from 'react';




// Assets
import SinglesPost from './SinglesPost';


const SinglesComponent = () => {



        // s1
        const s1s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/2%20Photoshopped.png?alt=media&token=7a5f72c3-9e22-43ed-997a-a1255b14e273"
        const s1a = "Country Road"
        // s2
        const s2s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/30fps0200.png?alt=media&token=e32eb41f-f069-4532-b6c4-0ff1b07ab475"
        const s2a = "Dance and Die"
        // s3
        const s3s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/5%20photshooped.png?alt=media&token=234754b5-95ec-4707-b0e2-8a58ebb135f2"
        const s3a = "Botting"
        // s4
        const s4s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/5.png?alt=media&token=1e20db6b-5697-426f-87b2-2648e7e63df5"
        const s4a = "AFK"
        // s5
        const s5s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/6.png?alt=media&token=6acfbf2d-20e2-470c-a86a-27c71f202065"
        const s5a = "AFK"
        // s6
        const s6s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/SLIME0259.png?alt=media&token=70e48f19-a5da-40cc-b60e-342f15f99b75"
        const s6a = "Feeling like."
        // s7
        const s7s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/Tiltt0300.png?alt=media&token=e4ee5978-bea8-431b-8f2b-7bc00f0c0076"
        const s7a = "Midas Touch"
        // s8
        const s8s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/clop0044.png?alt=media&token=5eca48ca-6127-4be0-8a9d-a77463693982"
        const s8a = "Cocaine"
        // s9
        const s9s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/cloth0224.png?alt=media&token=d2c5015c-e309-4aaf-acb6-15072cf64c55"
        const s9a = "Barely Naked"
        // s10
        const s10s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/far0313.png?alt=media&token=e370b138-28d7-4a17-a7a0-9dc5d6ece7a6"
        const s10a = "Midas Touch"
        // s11
        const s11s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/front0124.png?alt=media&token=10dd324b-ef55-4c51-b3e2-41cb8cc9eab5"
        const s11a = "God Like"
        // s12
        const s12s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/gold0083.png?alt=media&token=39045117-c350-47a7-9ecc-62eb7f15bc9f"
        const s12a = "Feeling like."
        // s13
        const s13s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/loi0594.png?alt=media&token=7b445c22-2f5f-48cb-a57f-6ce7dc11c339"
        const s13a = "Momentum"
        // s14
        const s14s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/meditation0074.png?alt=media&token=fa861b00-978e-44fb-82dd-88bc676c23a5"
        const s14a = "Gran pops"
        // s15
        const s15s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/melt0164.png?alt=media&token=9280ed64-9828-4e8d-86af-4b67ebcf9f24"
        const s15a = "Ego."
        // s16
        const s16s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/multi0355.png?alt=media&token=e7a71977-f82a-4110-af5e-a82d238c2937"
        const s16a = "dance dance"
        // s17
        const s17s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/raining0074.png?alt=media&token=7b787ffd-6f65-41a5-83d6-3f820ab428da"
        const s17a = "Cocaine Jesus"
        // s18
        const s18s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/red0025.png?alt=media&token=ab8c3760-d06d-462d-b3a7-076a1e42134b"
        const s18a = "So RED."
        // s19
        const s19s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/sideclose0228.png?alt=media&token=f4dcab40-52c6-43b6-9adb-20ab5e543945"
        const s19a = "Freak"
        // s20
        const s20s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/sit0157.png?alt=media&token=592a3e6a-abd0-43c8-b06b-f37f48a217d7"
        const s20a = "Exhausted"
        // s21
        const s21s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/sp0015.png?alt=media&token=04052b6d-48cf-490f-ab78-215e7546fddf"
        const s21a = "Money pls"
        // s22
        const s22s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/splash0033.png?alt=media&token=7e3ea1fc-b2d2-4e27-87ca-5bf5396ece31"
        const s22a = "Water sims"
        // s23
        const s23s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/still0073.png?alt=media&token=9f52dbfa-ee37-43f7-8158-301fa0b2529f"
        const s23a = "Sorry."
        // s24
        const s24s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_20LMMMqpze.png?alt=media&token=5f290285-383e-4150-a116-f7ad1623a50f"
        const s24a = "Sellout."
        // s25
        const s25s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_Ebn4tXhUJd.jpg?alt=media&token=c4229092-d7dc-4f07-b30d-097564ea0eb8"
        const s25a = "Houdini Motion"
        // s26
        const s26s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_JIEg4B8KxW.png?alt=media&token=49f47e04-4d09-451b-b889-0c92fa5b477e"
        const s26a = "LP"
        // s27
        const s27s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_LneAmtTOQZ.png?alt=media&token=57477908-ef2f-4106-b461-091e24adf3df"
        const s27a = "Shit."
        // s28
        const s28s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_PFeKIFCxMS.jpg?alt=media&token=494d361f-c79f-430a-ae3c-8fdd4cab0453"
        const s28a = "RAWR!"
        // s29
        const s29s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_czNRysDpz1.png?alt=media&token=3580f7a6-2ca8-4261-9b35-077ad8c12e29"
        const s29a = "Pretentious"
        // s30
        const s30s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/walk0074.png?alt=media&token=f51e4a20-160f-40ef-adde-2a3d258587cb"
        const s30a = "Sorry."
        // s31
        const s31s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/wind0297.png?alt=media&token=b928e2f2-d756-43fe-b7d9-bd93d3b54ed5"
        const s31a = "Vellum Reveal"
        // s32
        const s32s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/zoomout0368.png?alt=media&token=7bcc89f7-a46a-4bfd-ab78-6968cfd882e7"
        const s32a = "Thank you."
        // s33
        const s33s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_zh0Qptofox.png?alt=media&token=fb20cdd1-edce-4064-a940-01241bbffe5c"
        const s33a = "Vellum Test"
        // s34
        const s34s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_wW5E42lv8g.png?alt=media&token=7d222df5-e9db-4358-a3d4-38d67a46443a"
        const s34a = "Park"
        // s35
        const s35s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_wm5GUku0ZS.png?alt=media&token=153ac6c6-3a20-4b85-8691-bb25eab255cc"
        const s35a = "Cometh"
        // s36
        const s36s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_RDgCft8WoC.png?alt=media&token=bac90928-88f9-440f-96a4-3b53efe1acb8"
        const s36a = "Here it comes."
        // s37
        const s37s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_pQKmVDTBCc.png?alt=media&token=9182738f-ee21-4650-888d-eec228f44eb1"
        const s37a = "cool"
        // s38
        const s38s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_PJFjKjSa8x.jpg?alt=media&token=70f373b4-6855-42a3-a0de-f7e51d1d00d1"
        const s38a = "work"
        // s39
        const s39s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_NEAsQVqEnQ.png?alt=media&token=4b25f477-d578-4e6e-91e0-46ab035ea1c3"
        const s39a = "park"
        // s40
        const s40s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_gzOFZ8ZsaD.png?alt=media&token=33c12b9e-b598-4371-8537-a7b12243ef71"
        const s40a = "skate"
        // s41
        const s41s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_ET1z2yXbjv.jpg?alt=media&token=bf01dad3-e3dc-473e-8891-b2553b9e283f"
        const s41a = "momo"
        // s42
        const s42s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_7Ik15Nr3p5.png?alt=media&token=58fc2748-226a-4f14-856e-633e87080b86"
        const s42a = "normies"
        // s43
        const s43s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/vlc_0JZUq5jyPa.png?alt=media&token=82f741a0-09f5-42c8-a2c2-1f3410808581"
        const s43a = "work"
        // s44
        const s44s = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/scale0007.png?alt=media&token=3afe6b30-7e7e-4c01-b1f9-2f3e0c71c4be"
        const s44a = "scale"
        
        function shuffleArray(array) {
            return array.slice().sort(() => Math.random() - 0.5);
          }
          
          const singlesPostsArray = [
            <SinglesPost src={s1s} alt={s1a} />,
            <SinglesPost src={s2s} alt={s2a} />,
            <SinglesPost src={s3s} alt={s3a} />,
            <SinglesPost src={s4s} alt={s4a} />,
            <SinglesPost src={s5s} alt={s5a} />,
            <SinglesPost src={s6s} alt={s6a} />,
            <SinglesPost src={s7s} alt={s7a} />,
            <SinglesPost src={s8s} alt={s8a} />,
            <SinglesPost src={s9s} alt={s9a} />,
            <SinglesPost src={s10s} alt={s10a} />,
            <SinglesPost src={s11s} alt={s11a} />,
            <SinglesPost src={s12s} alt={s12a} />,
            <SinglesPost src={s13s} alt={s13a} />,
            <SinglesPost src={s14s} alt={s14a} />,
            <SinglesPost src={s15s} alt={s15a} />,
            <SinglesPost src={s16s} alt={s16a} />,
            <SinglesPost src={s17s} alt={s17a} />,
            <SinglesPost src={s18s} alt={s18a} />,
            <SinglesPost src={s19s} alt={s19a} />,
            <SinglesPost src={s20s} alt={s20a} />,
            <SinglesPost src={s21s} alt={s21a} />,
            <SinglesPost src={s22s} alt={s22a} />,
            <SinglesPost src={s23s} alt={s23a} />,
            <SinglesPost src={s24s} alt={s24a} />,
            <SinglesPost src={s25s} alt={s25a} />,
            <SinglesPost src={s26s} alt={s26a} />,
            <SinglesPost src={s27s} alt={s27a} />,
            <SinglesPost src={s28s} alt={s28a} />,
            <SinglesPost src={s29s} alt={s29a} />,
            <SinglesPost src={s30s} alt={s30a} />,
            <SinglesPost src={s31s} alt={s31a} />,
            <SinglesPost src={s32s} alt={s32a} />,
            
            <SinglesPost src={s33s} alt={s33a} />,
            <SinglesPost src={s34s} alt={s34a} />,
            <SinglesPost src={s35s} alt={s35a} />,
            <SinglesPost src={s36s} alt={s36a} />,
            <SinglesPost src={s37s} alt={s37a} />,
            <SinglesPost src={s38s} alt={s38a} />,
            <SinglesPost src={s39s} alt={s39a} />,
            <SinglesPost src={s40s} alt={s40a} />,
            <SinglesPost src={s41s} alt={s41a} />,
            <SinglesPost src={s42s} alt={s42a} />,
            <SinglesPost src={s43s} alt={s43a} />,
            <SinglesPost src={s44s} alt={s44a} />,


          ];

          const shuffledArray = shuffleArray(singlesPostsArray);



  return (
    <div className='singles-container'>
        {shuffledArray.map((component, index) => (
            <React.Fragment key={index}>{component}</React.Fragment>
        ))}
    </div>
  )
}

export default SinglesComponent