function gapi(AKAY, VMLite_GTFS, HEADER, EXPR, FETTER){
  let aw = `${VMLite_GTFS}${HEADER}${AKAY}${FETTER}`;
  for (i=0;i<10;i++){
    aw = atob(aw)
  }
  return aw
}
