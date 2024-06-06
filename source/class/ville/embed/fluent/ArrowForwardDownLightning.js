/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowForwardDownLightning",
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

   var pathdregular = "M16.3 7 13.6 4.32a.5.5 0 0 1 .64-.77l.07.06 3.56 3.57.05.07.03.06.02.06v.03c.02.03.02.06.02.1v-.02.06l-.02.09-.02.06-.04.08-.05.07-3.55 3.55a.5.5 0 0 1-.77-.64l.06-.07L16.3 8H12C8.48 8 6.11 6.02 6 3.2V3a.5.5 0 0 1 1 0c0 2.27 1.8 3.9 4.74 4h4.56ZM11 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.12-3a.5.5 0 0 0-.47.33l-.88 2.5A.5.5 0 0 0 5 14h.78l-.51 1.87a.5.5 0 0 0 .9.4l2.25-3.5A.5.5 0 0 0 8 12h-.75l.28-.84a.5.5 0 0 0-.47-.66H5.88Z";
   var pathdfilled = "m15.69 7-2.26-2.26a.75.75 0 0 1 .98-1.13l.08.07 3.54 3.54.07.08.04.06.05.1.03.08.02.07v.06l.01.1v.06l-.02.09-.03.1-.05.1-.03.05a.75.75 0 0 1-.09.11l-3.54 3.54a.75.75 0 0 1-1.13-.98l.07-.08L15.7 8.5H12c-3.65 0-6.13-2.08-6.25-5.04v-.21a.75.75 0 0 1 1.5 0c0 2.13 1.7 3.66 4.5 3.75h3.94ZM11 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.12-3a.5.5 0 0 0-.47.33l-.88 2.5A.5.5 0 0 0 5 14h.78l-.51 1.87a.5.5 0 0 0 .9.4l2.25-3.5A.5.5 0 0 0 8 12h-.75l.28-.84a.5.5 0 0 0-.47-.66H5.88Z";
   
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