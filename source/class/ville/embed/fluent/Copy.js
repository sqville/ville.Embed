/* ************************************************************************

SQville

   Authors:
     * Chris Eskew (sqville) sqville@gmail.com

************************************************************************ */

 qx.Class.define("ville.embed.fluent.Copy",
 {
   extend : ville.embed.fluent.Abstract,

   construct (iconstyle)
   {
    super();

    if (iconstyle != null)
      this.setIconStyle(iconstyle);

    var pathdregular = "M8 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8ZM7 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4ZM4 6a2 2 0 0 1 1-1.73V14.5A2.5 2.5 0 0 0 7.5 17h6.23A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5V6Z";
    var pathdfilled = "M6 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4ZM4 6a2 2 0 0 1 1-1.73V14.5A2.5 2.5 0 0 0 7.5 17h6.23A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5V6Z";
    
    //prep regular
    this._htmlregular = this.svgit(this.pathit(pathdregular));

    //prep filled
    this._htmlfilled = this.svgit(this.pathit(pathdfilled));
    
    if (this.getIconStyle() == "filled")
      this.setHtml(this._htmlfilled);
    else 
      this.setHtml(this._htmlregular);

  }
 });