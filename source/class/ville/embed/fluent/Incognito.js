/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Incognito",
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

   var pathdregular = "M6.17 4.28A.5.5 0 0 1 6.62 4h6.76c.2 0 .36.1.45.28l1.22 2.44a.5.5 0 1 0 .9-.44l-1.23-2.45A1.5 1.5 0 0 0 13.38 3H6.62a1.5 1.5 0 0 0-1.34.83L4.05 6.28a.5.5 0 0 0 .9.44l1.22-2.44Zm11.25 4.71C11.47 8 8.52 8 2.58 9a.5.5 0 0 1-.16-.98C8.47 7 11.52 7 17.58 8a.5.5 0 1 1-.16.98ZM5.5 11a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2 13.5a3.5 3.5 0 0 1 6.96-.5h2.08a3.5 3.5 0 1 1 0 1H8.96A3.5 3.5 0 0 1 2 13.5ZM14.5 11a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z";
   var pathdfilled = "M4.08 8.75a34.9 34.9 0 0 1 11.86 0l1.48.24a.5.5 0 1 0 .16-.98l-1.13-.19a1.42 1.42 0 0 0-.08-.22l-1.65-3.7a1.5 1.5 0 0 0-1.37-.9h-6.7c-.6 0-1.13.35-1.37.9L3.63 7.6l-.09.23L2.42 8a.5.5 0 0 0 .16.98 90.9 90.9 0 0 1 1.5-.24ZM3 13.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM5.5 10a3.5 3.5 0 1 0 3.46 4h2.08a3.5 3.5 0 1 0 0-1H8.96a3.5 3.5 0 0 0-3.46-3Zm6.5 3.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z";
   
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