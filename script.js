gsap.to("#box1",
  {
     x:1200,
     duration:2,
     delay:1,
     rotate:360,
     backgroundColor:"blue",
     borderRadius:"50%",
     scale:0.6,
     repeat:1,
     yoyo:"True"
  }
)
gsap.from("#box2",{
  x:1200,
  delay:1,
  duration:2
})