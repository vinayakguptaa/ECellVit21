const media1 =
  "https://ecellvit21mainwebsite.s3.ap-south-1.amazonaws.com/galleryImages/img1.jpg";
const media2 =
  "https://ecellvit21mainwebsite.s3.ap-south-1.amazonaws.com/galleryImages/img2.jpg";
const media3 =
  "https://ecellvit21mainwebsite.s3.ap-south-1.amazonaws.com/galleryImages/img3.jpg";
const media4 =
  "https://ecellvit21mainwebsite.s3.ap-south-1.amazonaws.com/galleryImages/img4.jpg";
const media5 =
  "https://ecellvit21mainwebsite.s3.ap-south-1.amazonaws.com/galleryImages/img5.jpg";
const media6 =
  "https://ecellvit21mainwebsite.s3.ap-south-1.amazonaws.com/galleryImages/img6.jpg";

export const media = [media1, media2, media3, media4, media5, media6];
export const mediaByIndex = (index) => media[index % media.length];
