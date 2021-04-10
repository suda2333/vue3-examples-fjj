import { Course, Song, Title } from "./Types";

export function listCourses() {
  const courses: Course[] = [
    { id: 4, name: "Java程序设计", createTime: "2046-05-10T12:00" },
    { id: 5, name: "Web开发技术", createTime: "2046-04-10T09:00" },
    { id: 6, name: "Web系统框架", createTime: "2046-06-10T21:30" },
    { id: 7, name: "移动终端开发技术", createTime: "2046-06-13T18:43" }
  ];
  return courses;
}
export function listTitles() {
  const titles: Title[] = [
    { id: 1, name: "讲师" },
    { id: 2, name: "副教授" },
    { id: 3, name: "教授" }
  ];
  return titles;
}
export function listPolular() {
  const polulars: Song[] = [
    {
      id: 1,
      title: "hE25Lope",
      length: "03:07",
      singer: "TimLtd Legend",
      album: "hoESqpe"
    },
    {
      id: 2,
      title: "AL3LIVE",
      length: "03:24",
      singer: "lyvcknch.",
      album: "ALLPIVE"
    },
    {
      id: 3,
      title: "BalUSdng!MV",
      length: "02:40",
      singer: "AK5JR",
      album: "Ban4Cpg!"
    }
  ];
  return polulars;
}
export function listChineses() {
  const chineses: Song[] = [
    {
      id: 1,
      title: "SUMMER!",
      length: "03:07",
      singer: "PERTAGON",
      album: "SUM(ME:R)"
    },
    {
      id: 2,
      title: "WavIlNter Glass",
      length: "03:24",
      singer: "CanndTion",
      album: "Water apGlass"
    },
    {
      id: 3,
      title: "LkRgIalalaMV",
      length: "02:40",
      singer: "YB2K/b2Orbno$",
      album: "Lalcala"
    }
  ];
  return chineses;
};
export function listRock() {
  const rock: Song[] = [
    {
      id: 1,
      title: "Despacito (RAemix)",
      length: "03:07",
      singer: "Luiwos Fonsi/DaBod",
      album: "SUM(ME:R)"
    },
    {
      id: 2,
      title: "WavIlNter Glass",
      length: "03:24",
      singer: "CanndTion",
      album: "Water apGlass"
    },
    {
      id: 3,
      title: "LkRgIalalaMV",
      length: "02:40",
      singer: "YB2K/b2Orbno$",
      album: "Lalcala"
    }
  ];
  return rock;
};
