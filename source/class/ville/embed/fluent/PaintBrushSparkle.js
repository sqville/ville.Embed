/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PaintBrushSparkle",
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

   var pathdregular = "m14.88 7.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.22 2.22 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0-.14.46.3.3 0 0 0 .14.11l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM5 2.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v3.6a1.42 1.42 0 0 0-1-.02V3h-1v2.5a.5.5 0 0 1-1 0V3h-1v1.5a.5.5 0 0 1-1 0V3H6v6h5.42l-.46.15h-.01a1.42 1.42 0 0 0-.86.85H6v1a1 1 0 0 0 1 1h1.5c.28 0 .5.23.5.5V16a1 1 0 1 0 2 0v-3.5c0-.26.2-.47.46-.5l.58.2a1.2 1.2 0 0 1 .76.76l.02.04H12v3a2 2 0 1 1-4 0v-3H7a2 2 0 0 1-2-2V2.5Z";
   var pathdfilled = "m14.88 7.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.22 2.22 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0-.14.46.3.3 0 0 0 .14.11l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM10 2v2.5a.5.5 0 0 0 1 0V2h1v3.5a.5.5 0 0 0 1 0V2h1.5c.28 0 .5.22.5.5v3.6a1.42 1.42 0 0 0-1.86.85v.01l-.36 1.08a1.2 1.2 0 0 1-.74.76l-.61.2H5V2.5c0-.28.22-.5.5-.5H10Zm.09 8H5v1c0 1.1.9 2 2 2h1.5v3.5a1.5 1.5 0 0 0 3 0V13h1.32l-.02-.04a1.19 1.19 0 0 0-.35-.53 1.2 1.2 0 0 0-.4-.24l-1.09-.35h-.01a1.42 1.42 0 0 1-.86-1.84Z";
   
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