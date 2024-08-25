// gsap.to("#box1",{
//   x:1500,
//   rotate:360,
//   duration:3,
//   delay:1
// })
// gsap.to("#box2",{
//   x:1500,
//   bckgrounColor:"yellow",
//   duration:3,
//   delay:4
// })
// gsap.to("#box3",{
//   x:1500,
//   scale:0.5,
//   borderRdius:"50%",
//   delay:4
// })

var tl=gsap.timeline()

tl.to("#box1",{
  x:1500,
  rotate:360,
  duration:2,
  delay:1.5
})
tl.to("#box2",{
  x:1500,
  rotate:360,
  duration:2
})