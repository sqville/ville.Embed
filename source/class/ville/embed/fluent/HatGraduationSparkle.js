/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HatGraduationSparkle",
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

   var pathdregular = "m14.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02Zm-3.9 1.92c.05.05.1.11.12.18v4.19a.5.5 0 0 1-.15.35v.01l-.03.03a3.66 3.66 0 0 1-.38.32A9.1 9.1 0 0 1 10 17a9.1 9.1 0 0 1-5.74-2.05 3.6 3.6 0 0 1-.08-.07.53.53 0 0 1-.18-.39v-4.49L2 8.86v4.64a.5.5 0 0 1-1 0V8c0-.19.1-.35.26-.44L8.51 3.4a3 3 0 0 1 1.58-.4 1.42 1.42 0 0 0 0 1A2 2 0 0 0 9 4.27L2.5 8 9 11.73a2 2 0 0 0 2 0l3.66-2.1c.07.04.15.08.23.1l.77.26c.08.03.16.08.22.14Zm-4.39 2.47a3 3 0 0 1-2.98 0L5 10.59v3.69l.17.14A8.1 8.1 0 0 0 10 16a8.1 8.1 0 0 0 5-1.72v-3.7l-3.5 2.02Z";
   var pathdfilled = "m14.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM15.66 10c.06.02.13.06.19.11l-4.36 2.5a3 3 0 0 1-2.98 0L2 8.86v4.64a.5.5 0 1 1-1 0V8c0-.19.1-.36.26-.44L8.51 3.4a3 3 0 0 1 1.58-.4 1.42 1.42 0 0 0 .17 1.32c.17.24.41.43.71.53l1.06.35c.15.05.3.13.47.29.11.11.2.24.3.47l.35 1.1c.1.24.25.47.52.68.14.1.3.17.45.21a1.3 1.3 0 0 0 .77 1.79l.77.25ZM4 14.5v-3.34l4 2.3a4 4 0 0 0 4 0l4-2.3v3.34a.5.5 0 0 1-.15.35v.01l-.03.03a3.88 3.88 0 0 1-.38.32A9.1 9.1 0 0 1 10 17a9.1 9.1 0 0 1-5.74-2.05 3.81 3.81 0 0 1-.08-.07l-.02-.03A.51.51 0 0 1 4 14.5Z";
   
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