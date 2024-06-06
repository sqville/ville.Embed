/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MegaphoneLoud",
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

   var pathdregular = "M14.16 1.03c.26.08.4.37.31.63l-.5 1.5a.5.5 0 0 1-.94-.32l.5-1.5a.5.5 0 0 1 .63-.31Zm3.7 1.82a.5.5 0 1 0-.71-.7l-2 2a.5.5 0 0 0 .7.7l2-2Zm-10.25.3a2 2 0 0 1 3.26-.52l6.58 6.98a2 2 0 0 1-.64 3.2l-3.94 1.74a3.5 3.5 0 0 1-6.34 2.8l-1.2.52a1.5 1.5 0 0 1-1.67-.3l-1.22-1.22a1.5 1.5 0 0 1-.3-1.7l5.47-11.5Zm-.16 13.78a2.5 2.5 0 0 0 4.5-1.97l-4.5 1.97Zm2.7-13.61a1 1 0 0 0-1.64.25l-5.46 11.5a.5.5 0 0 0 .1.57l1.22 1.21a.5.5 0 0 0 .55.1L16.4 11.9a1 1 0 0 0 .33-1.6l-6.59-6.98ZM17 6a.5.5 0 0 0 0 1h1.5a.5.5 0 1 0 0-1H17Z";
   var pathdfilled = "M14.16 1.03c.26.08.4.37.31.63l-.5 1.5a.5.5 0 0 1-.94-.32l.5-1.5a.5.5 0 0 1 .63-.31Zm3.7 1.82a.5.5 0 1 0-.71-.7l-2 2a.5.5 0 0 0 .7.7l2-2Zm-10.25.3a2 2 0 0 1 3.26-.52l6.58 6.98a2 2 0 0 1-.64 3.2l-3.94 1.74a3.5 3.5 0 0 1-6.34 2.8l-1.2.52a1.5 1.5 0 0 1-1.67-.3l-1.22-1.22a1.5 1.5 0 0 1-.3-1.7l5.47-11.5Zm-.16 13.78a2.5 2.5 0 0 0 4.5-1.97l-4.5 1.97ZM17 6a.5.5 0 0 0 0 1h1.5a.5.5 0 1 0 0-1H17Z";
   
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