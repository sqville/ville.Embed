/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RibbonOff",
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

   var pathdregular = "M4.62 5.33 2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L14 14.71v2.79a.5.5 0 0 1-.75.43L10 16.08l-3.25 1.85A.5.5 0 0 1 6 17.5v-5.03a5.98 5.98 0 0 1-1.38-7.14Zm8.05 8.05A5.98 5.98 0 0 1 7 13.2v3.44l2.75-1.57a.5.5 0 0 1 .5 0L13 16.64V13.7l-.33-.33Zm-.76-.76L5.38 6.1A4.98 4.98 0 0 0 10 13c.68 0 1.32-.13 1.91-.38ZM15 8c0 1.35-.53 2.57-1.4 3.47l.7.71A6 6 0 0 0 5.82 3.7l.7.7A4.98 4.98 0 0 1 15 8Z";
   var pathdfilled = "M4.62 5.33a6 6 0 0 0 8.04 8.04l.75.75A6.97 6.97 0 0 1 6 13.75v3.75a.5.5 0 0 0 .8.4L10 16l3.2 1.9a.5.5 0 0 0 .8-.4v-2.8l3.15 3.15a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7l2.47 2.48Zm1.2-1.63 8.48 8.48A6 6 0 0 0 5.82 3.7Z";
   
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