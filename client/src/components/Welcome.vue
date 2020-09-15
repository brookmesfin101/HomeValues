<template>
    <main>
        <section class="welcome">
            <header class="d-inline-block">
                <h1>Zillow Home Value Comparer</h1>
                <p>Find Home Value by State or Metro Area</p>
                <button class="btn btn-lg btn-outline-light">Learn More</button>
            </header>              
        </section>
    </main>
</template>

<style scoped>
    header {
        color: white;
        position: relative;
        top: 15%;
        left: 10%;
    }
        header h1 {
            font-size: 4rem;
        }
        header p {
            font-weight: 300;
            font-size: 2rem;
        }

    .welcome {
        background-image: url("../../public/breno-assis-r3WAWU5Fi5Q-unsplash.jpg");
        background-size: 100vw; 
        height: 100vh;
    }
        .welcome::before {
            content: "";
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-color: rgba(0,0,0,.70);
        }
    .welcome-img {
        width: 100%;
    }
</style>