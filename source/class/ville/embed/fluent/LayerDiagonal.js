/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LayerDiagonal",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M10.5 3.5a.5.5 0 0 0-.68-.46L3.95 5.36A1.5 1.5 0 0 0 3 6.76v5.74c0 .35.36.6.68.46l.32-.12v1.07c-.97.35-2-.37-2-1.41V6.75a2.5 2.5 0 0 1 1.58-2.32l5.87-2.32a1.5 1.5 0 0 1 2.05 1.3l-1 .4V3.5Zm3 2a.5.5 0 0 0-.68-.46L6.63 7.49A1 1 0 0 0 6 8.4v6.09c0 .35.36.6.68.46L8 14.44v1.08l-.95.37A1.5 1.5 0 0 1 5 14.5V8.42a2 2 0 0 1 1.26-1.85l6.19-2.45a1.5 1.5 0 0 1 2.05 1.4v.1l-1 .39v-.5Zm2.82 1.54a.5.5 0 0 1 .68.46v6.62a.5.5 0 0 1-.32.47l-6 2.37a.5.5 0 0 1-.68-.46V9.88c0-.2.13-.4.32-.47l6-2.37ZM18 7.5a1.5 1.5 0 0 0-2.05-1.4l-6 2.38A1.5 1.5 0 0 0 9 9.88v6.62a1.5 1.5 0 0 0 2.05 1.4l6-2.38c.57-.23.95-.78.95-1.4V7.5Z";
   var pathdfilled = "M9.45 2.1a1.5 1.5 0 0 1 2.05 1.3L5.42 5.82A2.25 2.25 0 0 0 4 7.91v6c-.97.35-2-.37-2-1.41V6.76a2.5 2.5 0 0 1 1.58-2.33l5.87-2.32Zm3 2a1.5 1.5 0 0 1 2.05 1.4v.1L9.26 7.68A2 2 0 0 0 8 9.54v5.98l-.95.37A1.5 1.5 0 0 1 5 14.5V8.43a2 2 0 0 1 1.26-1.86l6.19-2.45ZM18 7.5v6.62a1.5 1.5 0 0 1-.95 1.4l-6 2.38A1.5 1.5 0 0 1 9 16.5V9.88c0-.62.38-1.17.95-1.4l6-2.37A1.5 1.5 0 0 1 18 7.5Z";
   
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