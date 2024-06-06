/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SurfaceHub",
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

   var pathdregular = "M4.76 2.45a.5.5 0 0 1 .5-.45H15.5a.5.5 0 0 1 .5.55l-.76 8a.5.5 0 0 1-.5.45h-.66l.91 6.43a.5.5 0 0 1-.98.14L13.64 15h-2.28L11 17.57a.5.5 0 0 1-.98-.14l.34-2.43H7.36L7 17.57a.5.5 0 0 1-.98-.14L6.92 11H4.5a.5.5 0 0 1-.5-.55l.76-8ZM7.51 14h2.98l.43-3H7.93l-.42 3Zm4 0h1.98l-.42-3h-1.14l-.42 3Zm2.78-4 .66-7H5.71l-.66 7h9.24Z";
   var pathdfilled = "M5.26 2a.5.5 0 0 0-.5.45l-.76 8a.5.5 0 0 0 .5.55h2.42l-.91 6.43a.5.5 0 0 0 .98.14L7.36 15h3L10 17.43a.5.5 0 0 0 .98.14l.37-2.57h2.28l.37 2.57a.5.5 0 0 0 .98-.14L14.08 11h.66a.5.5 0 0 0 .5-.45l.76-8a.5.5 0 0 0-.5-.55H5.26Zm8.23 12h-1.98l.42-3h1.14l.42 3Zm-3 0H7.51l.42-3h3l-.44 3Z";
   
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