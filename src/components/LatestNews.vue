<script>
export default {
    name: "LatestNews",
    props:{
        newsSectionClass:{type:String,default:"news-section"}
    }
}
</script>
<template>
    <div :class="newsSectionClass">
        <div class="news-text-large">
            <p class="left-text-large">Latest News</p>
        </div>
        <div class="news-div">

            <article class="news-card">
                <div class="card-image">
                    <span class="video-text-small tag">PARTNERSHIP</span>
                    <img src="innerCircle.png" alt="Inner Circle" />
                </div>
                <div class="card-text">
                    <h3>Only the top 1% selected: Twoday joins the Microsoft Inner Circle for AI Business Solutions</h3>
                    <p>Just three years after its founding, Twoday
                        has been named to the Microsoft FY26 Inner
                        Circle for A1 Business Solutions — placing it
                        among the top 1% of Microsoft's global
                        partners.</p>
                </div>
            </article>


            <article class="news-card">
                <div class="card-image">
                    <span class="video-text-small tag">NEWS</span>
                    <img src="news.png" alt="News" />
                </div>
                <div class="card-text">
                    <h3>Twoday wins major contract with The National Bank of Denmark</h3>
                    <p>Danmarks Nationalbank has signed a new
                        contract with Twoday to operate, maintain,
                        and develop its web solution, ensuring strong
                        security and supporting its role as Denmark's
                        key economic knowledge provider.</p>
                </div>
            </article>

            <article class="news-card">
                <div class="card-image">
                    <span class="video-text-small tag">OUR PEOPLE</span>
                    <img src="otherPpl.png" alt="Auntie" />
                </div>
                <div class="card-text">
                    <h3>Kristin Nyberg from Twoday awarded the Microsoft Power Women Awards 2025</h3>
                    <p>Kristin Nyberg, Country Managing Director of
                        Twoday Norway, has won the Microsoft
                        Power Women Awards 2025, recognizing 20
                        European tech leaders for excellence in
                        leadership, innovation, and diversity.</p>
                </div>
            </article>

            <article class="news-card">
                <div class="card-image">
                    <span class="video-text-small tag">PARTNERSHIP</span>
                    <img src="Cables.png" alt="Microsoft Datacenter" />
                </div>
                <div class="card-text">
                    <h3>Twoday announced as Anchor Partner for Microsoft’s Danish datacenter</h3>
                    <p>Twoday has been named one of just seven
                        Anchor Partners and will play a key role as
                        Microsoft launches its first datacenter in
                        Denmark.</p>
                </div>
            </article>
        </div>
    </div>
</template>